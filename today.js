const http=require('http');
const today=require('./date');
const requestlistener=function(req,res){
    res.writeHead(200);
    let dateval=today.getDate();
    if(dateval.getHours()>0 && dateval.getHours()<12){
        res.end("Good Morning");
    }
    else if(dateval.getHours()>=12 && dateval.getHours()<17){
        res.end("Good Afternoon");
    }  
    else if(dateval.getHours()>=17 && dateval.getHours()<21){
        res.end("Good Evening");
    } 
    else{
        res.end("Good Night");
    }
}
const server=http.createServer(requestlistener);
const port=8080;
server.listen(port);
console.log(`Server is running on port ${port}`);