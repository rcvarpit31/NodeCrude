const {default:mongoose} = require("mongoose");
const dbConnect = ()=>{
     try {
    const conn = mongoose.connect( process.env.MONGODB_URL);
      console.log("databse is connected Successfully");  
     } catch (error) {
        console.log(error);
     }
}

module.exports = dbConnect;