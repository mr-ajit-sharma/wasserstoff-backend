import mongoose from 'mongoose'
const connectDB=async()=>{
try {
    await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log("mongoose is connected to the  database")
} catch (error) {
    console.log("error in db connection ",error)
    throw error
}
}
export default connectDB;