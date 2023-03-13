//get operation
const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('success')
})
//post operation
router.post('/',(req,res)=>{
    console.log('Name of hospital', req.body.hospital);
    console.log('Patient count', req.body.patcount);
    console.log('Location of hospital', req.body.location);
    res.send('success');
})

//put operation
router.put('/',(req,res)=>{
  console.log('Name of hospital', req.body.hospital);
    console.log('Patient count', req.body.patcount);
    console.log('Location of hospital', req.body.location) ;
    res.send('success');
})
//delete operation
router.delete('/',(req,res)=>{
    console.log('Name of hospital', req.body.hospital);
    console.log('Patient count', req.body.patcount);
    console.log('Location of hospital', req.body.location) ;
    res.send('successfully deleted');
})





module.exports=router