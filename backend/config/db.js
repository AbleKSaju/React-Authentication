import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Not connected");
        const conn = await mongoose.connect('mongodb://localhost:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("after");
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
