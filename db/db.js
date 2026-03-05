import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("database connect successful");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

 