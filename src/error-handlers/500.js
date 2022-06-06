'use strict';
module.exports=(req,res,next)=>{
    res.status(500).send(
        "server internet error"
    )
}