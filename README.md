# Dokumentasi Proyek Ticket Sales API

Proyek Ticket Sales adalah sebuah backend berbasis RESTful API yang dibangun menggunakan Node.js dan Express. API ini digunakan untuk mengelola sistem penjualan tiket acara (event), mulai dari manajemen pengguna, pengelolaan event beserta upload gambar, pengelolaan kursi (seat), hingga transaksi pemesanan tiket dengan autentikasi berbasis JWT (JSON Web Token).

Proyek ini dibangun berdasarkan pembelajaran dari Modul 1 hingga Modul 6 Node.js.

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **ORM (Object Relational Mapping):** Sequelize
- **Database:** MySQL
- **Autentikasi:** JSON Web Token (JWT)
- **Hashing Password:** MD5
- **File Upload:** Multer

---

## 🗄️ Struktur Database
Database sistem ini terdiri dari 4 tabel utama dengan relasi sebagai berikut:

1. **Users (`users`)**
   - Menyimpan data pengguna.
   - Kolom: `userID` (PK), `firstname`, `lastname`, `email`, `password`, `role` (ENUM: 'admin', 'user').
   - Relasi: Memiliki banyak tiket (`hasMany tickets`).

2. **Events (`events`)**
   - Menyimpan data acara yang tersedia.
   - Kolom: `eventID` (PK), `eventName`, `eventDate`, `venue`, `price`, `image`.
   - Relasi: Memiliki banyak tiket (`hasMany tickets`) dan kursi (`hasMany seats`).

3. **Seats (`seats`)**
   - Menyimpan data kursi dari suatu event.
   - Kolom: `seatID` (PK), `eventID` (FK), `rowNum`, `seatNum`, `status`.
   - Relasi: Dimiliki oleh satu event (`belongsTo event`) dan direferensikan dalam tiket (`hasOne ticket`).

4. **Tickets (`tickets`)**
   - Menyimpan data transaksi pemesanan tiket.
   - Kolom: `ticketID` (PK), `eventID` (FK), `userID` (FK), `seatID` (FK), `bookedDate`.
   - Relasi: Dimiliki oleh satu event (`belongsTo event`), dimiliki oleh satu user (`belongsTo user`), dan memiliki satu kursi (`belongsTo seat`).

---

## 📂 Struktur Direktori Proyek
Proyek ini mengadopsi pola arsitektur **MVC (Model-Controller)** (tanpa View karena berupa API):
```text
ticket_sales/
├── config/              # Konfigurasi koneksi database MySQL (config.json)
├── controller/          # Logika bisnis dan pemrosesan request (CRUD, Transaksi, Auth)
│   ├── auth.controller.js
│   ├── event.controller.js
│   ├── ticket.controller.js
│   ├── upload-image.js
│   └── user.controller.js
├── image/               # Folder tempat menyimpan gambar event hasil upload
├── middlewares/         # Fungsi perantara untuk validasi input dan pengecekan role
│   ├── role-validation.js
│   └── user-validation.js
├── migrations/          # File definisi struktur tabel database untuk generate table otomatis
├── models/              # Representasi tabel database dan relasinya (ORM)
├── routes/              # Definisi endpoint (URL API) dan mapping ke controller
├── seeders/             # Data awal / dummy database (contoh: sample users)
└── index.js             # Entry point utama aplikasi (konfigurasi server dan route)
```

---

## 🔐 Autentikasi & Hak Akses (Role)
Sistem ini menggunakan **JWT (JSON Web Token)** untuk mengamankan endpoint. 
Terdapat 2 jenis pengguna (`role`):
- **Admin:** Memiliki akses penuh untuk mengelola User, Event, dan melihat laporan Penjualan (Event Sales).
- **User:** Hanya dapat memesan tiket (Checkout), mengupdate profil sendiri, dan melihat riwayat tiket pribadinya (My Tickets).

Proses Auth:
1. Klien mengirim `email` dan `password` ke endpoint `/auth`.
2. Server memvalidasi dan mengembalikan **Token JWT**.
3. Token tersebut harus disisipkan pada **Header** (`Authorization: Bearer <token>`) pada request selanjutnya ke endpoint yang dilindungi.

---

## 🚀 Daftar Endpoint API (Route)

### 1. Autentikasi (`/auth`)
- `POST /auth` — Login untuk mendapatkan token (Tanpa token).

### 2. Pengguna (`/user`)
- `POST /user/register` — Mendaftar sebagai user baru (Tanpa token).
- `PUT /user/reset/:id` — Reset password akun (Tanpa token).
- `GET /user` — Mengambil semua data pengguna (Token: **Admin**).
- `GET /user/:key` — Mencari data pengguna berdasarkan kata kunci (Token: **Admin**).
- `POST /user` — Tambah user baru secara manual (Token: **Admin**).
- `PUT /user/:id` — Update data profil (Token: **User**).
- `DELETE /user/:id` — Hapus user (Token: **Admin**).

*(Semua manipulasi data User menggunakan MD5 untuk hashing password dan validasi express-validator)*

### 3. Acara (`/event`)
- `GET /event` — Mengambil semua daftar acara.
- `GET /event/:key` — Mencari acara berdasarkan keyword.
- `POST /event` — Membuat acara baru **termasuk upload gambar** `image` menggunakan Multer.
- `PUT /event/:id` — Mengubah data acara (mendukung replace gambar lama dengan yang baru).
- `DELETE /event/:id` — Menghapus acara dan otomatis menghapus file gambar di lokal server.

### 4. Transaksi Tiket (`/ticket`)
- `POST /ticket` — Membeli tiket (Otomatis generate `seat` dan merelasikannya ke `ticket`) (Token: **Semua Role**).
- `GET /ticket` — Menampilkan seluruh riwayat transaksi (Token: **Semua Role**).
- `GET /ticket/:id` — Menampilkan detail 1 transaksi berdasarkan ID (Token: **Semua Role**).
- `GET /ticket/my-tickets` — (Tugas Modul 5) Menampilkan tiket yang dimiliki oleh user yang sedang login (Token: **User**).
- `GET /ticket/event-sales` — (Tugas Modul 5) Menampilkan rekap jumlah tiket terjual per event (Token: **Admin**).
- `GET /ticket/top-events` — (Tugas Modul 5) Menampilkan 5 event terlaris (Token: **Semua Role**).

---

## ⚙️ Cara Menjalankan Aplikasi
1. Pastikan **MySQL Server** (XAMPP / lainnya) berjalan.
2. Buat database baru bernama `ticket_sales`.
3. Buka terminal di folder `ticket_sales` dan jalankan migrasi database:
   ```bash
   npx sequelize-cli db:migrate
   ```
4. Jalankan seeder untuk memasukkan data user awal:
   ```bash
   npx sequelize-cli db:seed:all
   ```
5. Jalankan server:
   ```bash
   npm start
   ```
   *Atau jika menggunakan nodemon:*
   ```bash
   nodemon index.js
   ```
6. API akan berjalan di `http://localhost:8000`. Silakan gunakan **Postman** untuk testing endpoint.
