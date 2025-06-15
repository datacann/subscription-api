const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); 
app.use(cors());

const connectDB = require('./config/db');
connectDB();

const subscriptionsRoute = require('./routes/subscriptions');
app.use('/api/subscriptions', subscriptionsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));