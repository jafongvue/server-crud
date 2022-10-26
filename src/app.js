const express = require('express');
const app = express();
const cors = require('cors');
const router = require('../src/routes/index');

startServer = () =>{
    app.use(cors());

    app.use(express.json());

    // app.get('/user/name',(req,res)=>{
    //     console.log('hello world')
    //     res.status(200).json(req.body);
    //     return;
        
    // });

    //this is params
    // app.get('/user/:name',(req,res)=>{
    //     console.log('hello world')
    //     res.status(200).json(req.params.name);
    //     return;
        
    // });

    //this is query
    // app.get('/user/?name',(req,res)=>{
    //     console.log('hello world')
    //     res.status(200).json(req.query.name);
    //     return;
        
    // });

    app.use('/v0/api', router);

    
    

    app.listen(9090, ()=>{
        console.log('server is listening port 9090');
    })
}

startServer();