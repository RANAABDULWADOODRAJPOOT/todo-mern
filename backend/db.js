require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const mongoDBAtlasURI = process.env.MONGODB_URI;
    await mongoose.connect(mongoDBAtlasURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = { connectToDatabase };
