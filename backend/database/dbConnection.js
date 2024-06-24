import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"Event_Planner"}).then(()=>{
        console.log("Connected to the database");
    }).catch(err=>{
        console.log("Some error occured while connecting to the database:",err);
    });
};