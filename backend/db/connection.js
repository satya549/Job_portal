import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/jobportal-app")
.then(() => {
    console.log("db connected successfully")
})
.catch((e) =>{
    console.log("Db connection failed",e)
})

export default mongoose;