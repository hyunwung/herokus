module.exports=(req,res,next)=>{
  if(req.path=="/users"){
    next()
  }else{
    res.status(400).json({err:"넌..못가"});
  }
}