const http=require('http');
const requestlistener=(req,res)=>{
    res.writeHead(200);
    res.end("Hello World");
}
const port=8080;
const server=http.createServer(requestlistener);
server.listen(port);
console.log(`Server is running on port ${port}`);