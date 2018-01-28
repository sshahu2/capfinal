const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');
const Schema=mongoose.Schema;
const conn=require('./user-direct');
const adminSchema=new Schema({
    name:{
        type:String,
    },
     email:{
        type:String,
        required:true
    },
     adminname:{
        type:String,
        required:true
    },
     password:{
       type:String,
        required:true
    },
});

const Admin=mongoose.model('admin',adminSchema);
module.exports=Admin;
module.exports.getAdminById=function(id,callback){
    Admin.findById(id,callback);
}

module.exports.getAdminByAdminname = function(adminname, callback){
  const query = {adminname: adminname}
  Admin.findOne(query, callback);
}
module.exports.addAdmin=function(newAdmin,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newAdmin.password,salt,(err,hash)=>{
            if(err) {
                console.log("not done");
            }
            else{
            newAdmin.password=hash;
            newAdmin.save(callback);}
        });
    });

}
module.exports.acomparePassword=function(adminPassword,hash,callback){
    bcrypt.compare(adminPassword,hash,(err,isMatch)=>{
        if(err) {
                console.log("not done");
            }
        callback(null,isMatch);
    });
}

