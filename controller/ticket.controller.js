const seatModel = require(`../models/index`).seat
const userModel = require(`../models/index`).user
const eventModel = require(`../models/index`).event
const ticketModel = require(`../models/index`).ticket

const Op = require(`sequelize`).Op

exports.addTicket = async (request, response) => {
    const today = new Date()
    const bookedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    const { eventID, userID, seats } = request.body;

    try {
        const seatIDs = await Promise.all(seats.map(async seat => {
          const { rowNum, seatNum } = seat;
          const createdSeat = await seatModel.create({
            eventID,
            rowNum,
            seatNum,
            status: true
          });
          return createdSeat.seatID;
        }));
    
        const tickets = await ticketModel.bulkCreate(seatIDs.map(seatID => ({
          eventID,
          userID,
          seatID,
          bookedDate
        })));
    
        response.status(201).json(tickets);
      } catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
      }
}

exports.getAllTicket = async (request, response) => {
    let tickets = await ticketModel.findAll(
        {
            include: [
                { model: eventModel, as: 'ticketEvent', attributes: ['eventName','eventDate','venue']},
                { model: userModel, as: 'ticketUser', attributes: ['firstname', 'lastname']},
                { model: seatModel, as: 'ticketSeat', attributes: ['rowNum', 'seatNum']},
            ]
        }
    )
    return response.json({
        success: true,
        data: tickets,
        message: `All tickets have been loaded`
    })
}

exports.ticketByID = async (request, response) => {
    try {
        let ticketID = request.params.id

        let ticket = await ticketModel.findOne({
            where: {
                ticketID: ticketID
            },
            include: [
                { model: eventModel, as: 'ticketEvent', attributes: ['eventName','eventDate','venue']},
                { model: userModel, as: 'ticketUser', attributes: ['firstname', 'lastname','email']},
                { model: seatModel, as: 'ticketSeat', attributes: ['rowNum', 'seatNum']},
            ]
        })
        return response.json({
            success: true,
            data: ticket,
            message: `Ticket has been loaded`
        })
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.myTickets = async (request, response) => {
    try {
        let userID = request.user.userID;
        let tickets = await ticketModel.findAll({
            where: { userID: userID },
            include: [
                { model: eventModel, as: 'ticketEvent', attributes: ['eventName', 'eventDate', 'venue'] },
                { model: seatModel, as: 'ticketSeat', attributes: ['rowNum', 'seatNum'] },
            ]
        });
        return response.json({
            success: true,
            data: tickets,
            message: 'Your tickets have been loaded'
        });
    } catch (error) {
        return response.status(500).json({ success: false, message: error.message });
    }
}

exports.eventSales = async (request, response) => {
    try {
        const sequelize = require('sequelize');
        let events = await eventModel.findAll({
            attributes: [
                'eventID', 'eventName',
                [sequelize.fn('COUNT', sequelize.col('eventTicket.ticketID')), 'totalSold']
            ],
            include: [{
                model: ticketModel,
                as: 'eventTicket',
                attributes: []
            }],
            group: ['event.eventID']
        });
        return response.json({
            success: true,
            data: events,
            message: 'Event sales loaded successfully'
        });
    } catch (error) {
        return response.status(500).json({ success: false, message: error.message });
    }
}

exports.topEvents = async (request, response) => {
    try {
        const sequelize = require('sequelize');
        let events = await eventModel.findAll({
            where: {
                eventDate: { [Op.gt]: new Date() }
            },
            attributes: [
                'eventID', 'eventName', 'eventDate',
                [sequelize.fn('COUNT', sequelize.col('eventTicket.ticketID')), 'totalSold']
            ],
            include: [{
                model: ticketModel,
                as: 'eventTicket',
                attributes: []
            }],
            group: ['event.eventID'],
            order: [[sequelize.literal('totalSold'), 'DESC']],
            limit: 5
        });
        return response.json({
            success: true,
            data: events,
            message: 'Top 5 upcoming events loaded successfully'
        });
    } catch (error) {
        return response.status(500).json({ success: false, message: error.message });
    }
}