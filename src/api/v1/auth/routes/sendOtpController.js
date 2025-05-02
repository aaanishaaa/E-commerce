const { sendOtpMail } = require("../../../../utils/emailHelper");

const sendOtpController= async(req,res)=>{
	const {email} =req.body;

	const otp=Math.floor(Math.random()*9000 +1000);
	sendOtpMail({otp,email}).then(()=>
	{
		res.status(200).json({message:"otp send successfully OTP is"}+otp);
		console.log("SEND");
	})
	.catch((err)=>{
		res.status(500).json({message:"otp not send"});
		console.log("not - SEND");
	})
	
	OtpModel.create({
		email:email,
		otp:otp,
	})


}
module.exports = {sendOtpController};