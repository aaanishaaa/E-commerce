const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            trim: true,
        },
        otp:{
            type: String,
            required: true,
            trim: true,
        },
    },
);

const OtpModel=mongoose.model("otp",otpSchema);
module.exports={
    OtpModel,
};
  