const express = require('express');

const app = express();

// app.use(cors({
//localhost:6000
// }))

//cross origin

app.use(express.json());  // TO accept the JSON from UI



const PORT = 5000;
// app.use('/static',express.static('public'));   // To accept the stactic files
app.use((req,res,next)=>{
    console.log("First MiddleWare");
    next();
});

//Express Routes
app.get('/users',(req,res)=>{
    res.send("<h1>Hello</h1>")
})

app.post('/post',(req,res)=>{

    console.log(req.body);

    //MongoDB

    res.send("<h1>Hello</h1>")
})
app.listen(PORT,()=>{
    console.log('Server connected')
});
//mongodb+srv://ramesh:<db_password>@nodetest.gtnkx.mongodb.net/?retryWrites=true&w=majority&appName=nodetest
//table => row
//Collection=>Fileds

//mongoose  ==> nosql => structured based, schema define

//https://www.mongodb.com/products/platform/atlas-database