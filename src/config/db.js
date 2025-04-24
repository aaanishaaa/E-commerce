const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGO_DB_URL,
    {
        dbName: "PRIME-PRODUCTS",
    }
).then(() => {
    console.log("-----------MongoDB connected------------");
}).catch((err) => {
    console.log("-----------MongoDB error---------------- " + err);
});
