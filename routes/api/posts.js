const express=require('express');
const router=express.Router();

// @route    POST api/posts
// @desc     Register route
// @access   Public
router.get('/', (req,res)=>{

    
    res.send('User route');
});

module.exports=router;