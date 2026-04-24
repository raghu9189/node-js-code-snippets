const http = require("node:http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        "content-type": "application/json",
        "set-cookie": "name=Raghu"
    });
    res.end(JSON.stringify({"name": "Raghu"}));
})

server.listen(8080, "localhost", ()=>{
      console.log(`Server running at http://localhost:8080/`);
})