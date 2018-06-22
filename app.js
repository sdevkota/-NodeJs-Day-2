const handler=require("./event");
//using path module
const path=require("path"); //when you don't have anything in the directory it looks for path.js
//path gives us a lot of API to work with 
console.log("**************PATH MODULE************");
let pathObject=path.parse(__filename);

//directory
console.log(`current directory: ${pathObject.dir}`); 
//root
console.log("Root:"+pathObject.root); 
//base file
console.log("Base url:"+pathObject.base); 

//extension of this file
console.log("Extension of this file:"+pathObject.ext); 
//name of the file
console.log("Name of this file:"+pathObject.name); 

//using OS module

const OSModule=require("os");
console.log("**************OS MODULE************");
//display the total memory of this machine 
console.log("Total memory: "+OSModule.totalmem());
//ES6 Template string 
console.log(`Free memory: ${OSModule.freemem()}`);

console.log("**************PATH MODULE************");
const fileModule=require("fs");

//display files in this folder
fileModule.readdir("./",(err,files)=>{
if(err){
    console.log("There is an error");
}
else{
    console.log("The files are: ["+files+"]");
}

});

//Events Module 

//This gives you a class not an object
// const EventEmitter =require("events");
// const emitter=new EventEmitter();


// //Register a listener
// emitter.on("event1",()=>{
//     console.log("Listening to the event 1");
// });

// //raise an event

// emitter.emit("event1");

// //you can send data to the listener
// emitter.on("event2",(eventArgs)=>{
//     console.log("Listening to the event 2: ",eventArgs.name);
// });
// emitter.emit("event2",{name:"sudeep"});
const Event=require('./event');
let eventObject=new Event();

eventObject.on("event2",(eventArgs)=>{
    console.log("Listening to the event 2: ",eventArgs.name);
});

eventObject.doSomething();
