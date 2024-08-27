import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    Intensity: Number,
    Likelihood: Number,
    Relevance: Number,
    Year: String,
    Country: String,
    Topics: String,
    Region: String,
    Sector: String,
    PEST: String,
    Source: String,
    SWOT: String,
    City: String,
},{strict:false}
)
const User=mongoose.model("User",userSchema,"myCollection")
export default User;

