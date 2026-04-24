import app from "./app.js";
import {env} from "./config/env.config.js"
app.get("/", (req, res)=>{
     res.status(200).send(
        {
        "message": "active"
    });
})
app.listen(env.PORT, ()=>{
    console.log(`listening on port ${env.PORT}`)
})
