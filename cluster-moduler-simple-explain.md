### **Cluster Module in Node.js**
The **Cluster module** in Node.js is used to create multiple instances of a Node.js process to take advantage of multi-core systems. This helps improve performance by distributing incoming requests across multiple CPU cores.

### **Why Use Clustering?**
By default, a Node.js application runs on a **single thread**, meaning it can only use **one CPU core** at a time. If your server handles many requests, a single-threaded process may become a bottleneck. The **cluster module** helps by creating **multiple worker processes**, allowing Node.js to handle more requests efficiently.

---

### **How Cluster Works**
1. The **Master Process**:
   - Creates multiple worker processes (equal to the number of CPU cores).
   - Distributes incoming requests to available worker processes.

2. The **Worker Processes**:
   - Each worker runs its own instance of the server.
   - If one worker crashes, others continue running, making the application more stable.

---

### **Example: Using the Cluster Module**
```javascript
const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isMaster) {
    // Get the number of CPU cores
    const numCPUs = os.cpus().length;
    console.log(`Master process is running on PID: ${process.pid}`);

    // Fork workers (one for each CPU core)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for worker exit and restart a new worker
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Starting a new worker...`);
        cluster.fork();
    });
} else {
    // Worker process: each will create an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from worker ${process.pid}`);
    }).listen(3000);

    console.log(`Worker ${process.pid} started`);
}
```

---

### **How This Works**
1. The **master process** (`cluster.isMaster`) starts and creates multiple worker processes (equal to the number of CPU cores).
2. Each **worker process** (`cluster.isWorker`) starts its own HTTP server.
3. Incoming requests are **automatically distributed** among the workers.
4. If a worker crashes, the master creates a **new worker** to keep the server running.

---

### **Benefits of Clustering**
✅ Utilizes **all CPU cores** efficiently.  
✅ Improves **scalability and performance**.  
✅ Increases **fault tolerance** (if a worker crashes, others still run).  

### **When to Use Clustering?**
- High-traffic **API servers**.
- Applications with **CPU-intensive tasks**.
- When you need **better load distribution**.

Let me know if you need further clarification! 🚀