const notFound = (req,res,next)=>{
    const  error  = new error (`Not Found :${req.originalUrl}`);
    res.status(404);
    nexr(error);
}
// error handler 
 const errorHandler = (err,req,res,next)=>{
    const  statusCode = res.statusCode === 200 ? 500 :res.statusCode;
    res.status(statusCode);
    res.json({message:err?.message,
    stack:err?.stack})
 }

 module.exports = {
    notFound,
    errorHandler
  }