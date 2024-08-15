
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB successfully 🙀✅');
        return mongoose;
    } catch (error) {
        console.error('Error connecting to MongoDB 😿❌:', error);
    }
};

export { connectDB };

