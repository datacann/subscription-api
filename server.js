const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const app = express();
require("dotenv").config();

app.use(express.json()); 
app.use(cors());

const connectDB = require('./config/db');
connectDB();

const subscriptionsRoute = require('./routes/subscriptions');
app.use('/api/subscriptions', subscriptionsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server çalışıyor 🚀 Port: ${process.env.PORT || 5000}`);
});

