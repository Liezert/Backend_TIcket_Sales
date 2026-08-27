'use strict';
let md5 = require('md5')
const now = new Date()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        firstname: "Badrus",
        lastname: "Zaman",
        email: "BadrusZaman@gmail.com",
        password: md5("12345"),
        role: "admin",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Ahmad",
        lastname: "Fauzi",
        email: "ahmad.fauzi@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Siti",
        lastname: "Nurhaliza",
        email: "siti.nurhaliza@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Budi",
        lastname: "Santoso",
        email: "budi.santoso@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Dewi",
        lastname: "Lestari",
        email: "dewi.lestari@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Eko",
        lastname: "Prasetyo",
        email: "eko.prasetyo@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Fajar",
        lastname: "Nugroho",
        email: "fajar.nugroho@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Gita",
        lastname: "Gutawa",
        email: "gita.gutawa@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Hendra",
        lastname: "Setiawan",
        email: "hendra.setiawan@gmail.com",
        password: md5("12345"),
        role: "admin",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Indah",
        lastname: "Permata",
        email: "indah.permata@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Joko",
        lastname: "Widodo",
        email: "joko.widodo@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Kartika",
        lastname: "Putri",
        email: "kartika.putri@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Lukman",
        lastname: "Hakim",
        email: "lukman.hakim@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Maya",
        lastname: "Sofa",
        email: "maya.sofa@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Naufal",
        lastname: "Azhar",
        email: "naufal.azhar@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Olivia",
        lastname: "Zalianty",
        email: "olivia.zalianty@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Pratama",
        lastname: "Arhan",
        email: "pratama.arhan@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Qory",
        lastname: "Gore",
        email: "qory.gore@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Rizky",
        lastname: "Febian",
        email: "rizky.febian@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Siska",
        lastname: "Kohl",
        email: "siska.kohl@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Taufik",
        lastname: "Hidayat",
        email: "taufik.hidayat@gmail.com",
        password: md5("12345"),
        role: "admin",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Utami",
        lastname: "Dewi",
        email: "utami.dewi@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Vina",
        lastname: "Panduwinata",
        email: "vina.panduwinata@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Wahyu",
        lastname: "Hidayat",
        email: "wahyu.hidayat@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Xavier",
        lastname: "Marks",
        email: "xavier.marks@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Yusuf",
        lastname: "Mansur",
        email: "yusuf.mansur@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Zainal",
        lastname: "Abidin",
        email: "zainal.abidin@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Andi",
        lastname: "Wijaya",
        email: "andi.wijaya@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Bambang",
        lastname: "Pamungkas",
        email: "bambang.p@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Citra",
        lastname: "Kirana",
        email: "citra.kirana@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Deni",
        lastname: "Cagur",
        email: "deni.cagur@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Erwin",
        lastname: "Gutawa",
        email: "erwin.gutawa@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Fitri",
        lastname: "Tropica",
        email: "fitri.tropica@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Gilang",
        lastname: "Dirga",
        email: "gilang.dirga@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Hana",
        lastname: "Saraswati",
        email: "hana.saraswati@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Irfan",
        lastname: "Hakim",
        email: "irfan.hakim@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Jessica",
        lastname: "Mila",
        email: "jessica.mila@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Kiki",
        lastname: "Fatmala",
        email: "kiki.fatmala@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Luna",
        lastname: "Maya",
        email: "luna.maya@gmail.com",
        password: md5("12345"),
        role: "admin",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Marten",
        lastname: "Paes",
        email: "marten.paes@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Nadine",
        lastname: "Chandrawinata",
        email: "nadine.c@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Oki",
        lastname: "Setiana",
        email: "oki.setiana@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Pevita",
        lastname: "Pearce",
        email: "pevita.pearce@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Raffi",
        lastname: "Ahmad",
        email: "raffi.ahmad@gmail.com",
        password: md5("12345"),
        role: "admin",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Sule",
        lastname: "Prikitiw",
        email: "sule.prikitiw@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Titi",
        lastname: "Kamal",
        email: "titi.kamal@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Uus",
        lastname: "Biasa",
        email: "uus.biasa@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Vino",
        lastname: "Bastian",
        email: "vino.bastian@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Wika",
        lastname: "Salim",
        email: "wika.salim@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Zaskia",
        lastname: "Gotik",
        email: "zaskia.gotik@gmail.com",
        password: md5("12345"),
        role: "user",
        createdAt: now,
        updatedAt: now
      },
      {
        firstname: "Badrus",
        lastname: "Zaman",
        email: "BadrusZaman@gmail.com",
        password: md5("12345"),
        role : "admin",
        createdAt : now,
        updatedAt : now
      },
      {
        firstname: "King",
        lastname: "David",
        email: "KingDavid@gmail.com",
        password: md5("12345"),
        role : "user",
        createdAt : now,
        updatedAt : now
      },
      {
        firstname: "Cristiano",
        lastname: "Ronaldo",
        email: "CristianoRonaldo@gmail.com",
        password: md5("12345"),
        role : "user",
        createdAt : now,
        updatedAt : now
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
