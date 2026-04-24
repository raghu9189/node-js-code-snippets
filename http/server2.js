const http = require("node:http");
const todos = [{item: "Chair"}, {item: "Shoes"}];

const server = http.createServer((req, res)=>{
    
    const { method, url } = req;

    // Set CORS headers (for development)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // console.log(method);
    // console.log(url);

    if (method == "GET" && url == "/todos"){
        res.writeHead(200, {"content-type": "application/json"}).end(JSON.stringify(todos));
    }





})

server.listen(8080, ()=>{
    console.log("server listening on 8080");
})
