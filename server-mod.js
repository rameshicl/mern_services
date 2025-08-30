console.log("HelloS")


// file system, os, path, http, crypto...

// content-type  :  application/json, MEME-type

// Request method

// status code

//libuv// threadpool, worker thread

const fs = require("fs");  // common modules

const http = require('http');

const path = require('path');

const math = require('./calc');

const express = require('express');
const app = express();


// fs.readFile , fs.writeFile    async

// fs.readFileSync, fs.readFileSync  sync



const server = http.createServer((req,res)=>{
    
})

fs.readFile('demo.txt','utf8',(err,res)=>{

    if(!err) console.log(res)

})

const base = path.basename("/sample/hello/one.txt");
var cfPK = path.join(__dirname, "/config/pk-*unique-id*.pem");
console.log(base)

console.log(cfPK);


console.log(math.sum(5,10))

console.log(math.mul(5,10))









