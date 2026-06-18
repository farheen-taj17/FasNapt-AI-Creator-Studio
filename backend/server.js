const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(
"/api/auth",
require("./routes/authRoutes")
);

app.get("/", (req,res)=>{

res.json({
message:"🚀 FasNapt Backend Running"
});

});

const PORT =
process.env.PORT || 5000;

app.listen(PORT,()=>{

console.log(
`Server Running On Port ${PORT}`
);

});


app.use(
"/api/projects",
require("./routes/projectRoutes")
);

app.use(
"/api/videos",
require("./routes/videoRoutes")
);


const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {

    console.log("User Connected");

    socket.on("send_message", (data) => {

        io.emit("receive_message", data);

    });

    socket.on("disconnect", () => {

        console.log("User Disconnected");

    });

});

server.listen(5000, () => {

    console.log("Server Running");

});



