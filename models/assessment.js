const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');
const Schema=mongoose.Schema;
const conn=require('./user-direct');
const db=require('./../app');
const router = require('express').Router();
const express=require('express');
var assess=new Schema({
        id:Number,
        title:String,
        score:Number,
        domain:[
            {
                id_id:Number,
                title:String,
                description:String,
                dom_score:Number,
                sub_domain:[
                    {
                        id_id_id:Number,
                        title:String,
                        sub_score:Number,
                        question:[String],
                        scoring_model:[Number]
                    }
                ] 
            }
        ]
});



var Book=mongoose.model('book',assess);
var doms1=new Book();

      doms1.id=1,
      doms1.title="Assessment No. 1",
      doms1.score=0
      
doms1.domain=[
        {
          "id_id":1,
          "title":"Domain A",
          "about":"A kjakskas hbasjk ",
          "dom_score":0,
          
        },
        {
            "id_id": 2,
            "title":"Domain B",
            "about":"B kjakskas hbasjk ",
            "sub_score":0,
            
          },
          {
            "id_id": 3,
            "title":"Domain C",
            "about":"c kjakskas hbasjk ",
            "sub_score":0,
            
          }];
          doms1.domain[0].sub_domain=[{
           id_id_id:1,
           title:"sub domain XYZ1",
           sub_score:"0",   
          },
          {
            id_id_id:2,
           title:"sub domain XYZ2",
           sub_score:"0",  
          },
          {
              id_id_id:3,
           title:"sub domain XYZ3",
           sub_score:"0",
          }
          ];
          doms1.domain[0].sub_domain[0].question=["vjakdsdjk0","vhjabd0k"];
          doms1.domain[0].sub_domain[0].scoring_model=[95,5];
          doms1.domain[0].sub_domain[1].question=["vjakdsdj1","vhjabd1","jksjfk1"];
          doms1.domain[0].sub_domain[1].scoring_model=[90,5,5];
          doms1.domain[0].sub_domain[2].question=["vjakdsdj3","vhjabd3","vjhbjke5"];
          doms1.domain[0].sub_domain[2].scoring_model=[65,30,5];
      
 

 
doms1.save(function(err,Book){
    if(err)
    console.log(error);
    else
console.log(Book);
/*db.close(function(){
        console.log('connection closed');
        
    })*/
});
router.get('/books',(req,res,next)=>{
  
 Book.find(function(err,book) {
            if (err)
               console.log(err);

            res.json(book);
 

           
        });
    });

   
module.exports=router;
/*module.exports.addBook=function(newBook,callback){
    
            newBook.save(callback);}
   */