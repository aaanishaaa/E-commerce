const getProductController=(res,req)=>{
    console.log("request recieved");
    res.json({
        status:"sucess",
        message:"work in progress"
    })
}
module.exports={getProductController}