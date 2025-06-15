const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://atacanerdoan:12345@subscription-tracker.cqoj8vp.mongodb.net/?retryWrites=true&w=majority&appName=subscription-tracker';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB bağlantısı başarılı!');
  } catch (err) {
    console.error('❌ MongoDB bağlantı hatası:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;