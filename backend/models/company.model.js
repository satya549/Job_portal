import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    description:{
        type: String,
    },
    website:{
        type: String,
    },
    location:{
        type: String,
        required:true
    },
    logo:{
        type: String,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {timestamps:true}); 
const CompanyModel =mongoose.model('Company', companySchema);
export default CompanyModel;