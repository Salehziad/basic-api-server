'use strict';

module.exports=(req,res,nex)=>{
    res.status(404).send(
        "page not found"
    )
}