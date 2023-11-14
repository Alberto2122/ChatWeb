const { webSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config()

const wss = new webSocketServer ({port: process.env.PORT || 8080});

wss.on("connection", (ws) => {
    ws.on("error", console.error) 
    
    ws.on("massage", () => {
        
    })

})