The cluster module in Node.js is a built-in module that allows you to create multiple child processes (workers) that run simultaneously and share the same server port. This enables you to take full advantage of multi-core systems, improving the performance and scalability of your Node.js applications. 
Key Points: 

• Single-Threaded Nature of Node.js: By default, Node.js runs on a single thread. This means that even if your server has multiple CPU cores, it can only utilize one of them. 
• Leveraging Multi-Core Systems: The cluster module allows you to create multiple worker processes, each running on a separate CPU core. This helps distribute the workload and handle more requests concurrently. 
• Load Balancing: The cluster module automatically distributes incoming requests across the worker processes using a round-robin algorithm. This ensures that no single worker gets overloaded. 
• Master Process: The main process that creates and manages the worker processes is called the master process. It is responsible for load balancing and restarting worker processes in case of failures. 

How to Use: 
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  // Master process
  const numCPUs = os.cpus().length;

  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart the worker
  });
} else {
  // Worker process
  const http = require('http');

  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from worker ' + process.pid + '\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

Benefits: 

• Improved Performance: By utilizing multiple cores, you can handle more requests concurrently, leading to better performance. 
• Increased Scalability: Clustering allows your application to scale horizontally by adding more worker processes as needed. 
• Fault Tolerance: If a worker process crashes, the master process can automatically restart it, ensuring that your application remains available. 


Generative AI is experimental.

[-] https://medium.com/@mjdrehman/implementing-node-js-cluster-for-improved-performance-f800146e58e1


[-] https://blog.bitsrc.io/boosting-the-performance-of-node-js-applications-with-the-cluster-module-e55def010186[-] https://amplication.com/blog/7-tips-to-build-scalable-nodejs-applications[-] https://blog.bitsrc.io/boosting-the-performance-of-node-js-applications-with-the-cluster-module-e55def010186[-] https://amplication.com/blog/7-tips-to-build-scalable-nodejs-applications
