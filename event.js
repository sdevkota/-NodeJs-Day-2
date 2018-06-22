
//This gives you a class not an object
const EventEmitter =require("events");

class Event extends EventEmitter{
    doSomething(){
        this.emit("event2",{name:"sudeep"});
    }
}

//export the class instead of the object
module.exports=Event; 

