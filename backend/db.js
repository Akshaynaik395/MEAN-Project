const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/MEANDB',(err)=>{
    if(!err){
        console.log("Connection Successfully");
    }
    else{
        console.log("Error in db connection:"+JSON.stringify(err,undefined,2))
    }
});

module.exports=mongoose;