// Mengimpor modul yang dibutuhkan
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Mengimpor dotenv untuk memuat file .env

const app = express();

// Middleware untuk logging request
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Mengatur express untuk menerima data JSON dan data URL-encoded (form submission)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menyajikan file statis dari folder 'public'
app.use(express.static(__dirname));

// Menangani route root untuk mengirim index.html secara eksplisit
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Membuat transporter menggunakan nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Endpoint untuk mengirim email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({ message: 'Semua field harus diisi' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Feedback dari ${name}`,
    text: `Dari: ${name} (${email})\nPesan: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error: ' + error.toString() });
    } else {
      return res.status(200).send({ message: 'Email sent: ' + info.response });
    }
  });
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
