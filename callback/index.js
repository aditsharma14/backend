function firstcallback(){
    console.log("This is the first callback function");
}
console.log("This is the main function");
setTimeout(firstcallback, 8000);