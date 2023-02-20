const express=require('express');
const router=express.Router();
const user=require('../modele/user')

router.get('/show',(req,res,next)=>{
 res.send('bonjour Yosra Mekaoui');
});
//hedhi 5dmtch
/*router.get('/add/:name/:email/:cin',(req,res,next)=>{
    console.log("notre data:"+JSON.stringify(req.params));
    new user(name=req.params.name,
            email=req.params.email,
            cin=req.params.cin
        ).save((err,data)=>{
            if(err){
                console.log(err);
            
            }
            console.log(data);
            res.json(data);
        })
   });*/
router.post("/add",  function (req, res, next){
    console.log("resultat:"+req.body);
    try{
    const User=new user({...req.body});
     User.save();
    }catch(err){
        console.log(err);
    }
   })

module.exports=router;
