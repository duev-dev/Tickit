import mongoose from 'mongoose'

export const connectDB = async() =>{
 try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

        console.log("Lien ket thanh cong");
 } catch (error) {
    console.error("Loi khi connect :", error);
    process.exit(1); // exit with error
 }   
}