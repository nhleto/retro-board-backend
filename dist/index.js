"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const socketServer = new ws_1.WebSocket.Server({ port: 8080 });
socketServer.on("connection", (socket) => {
    socket.on("message", (message) => {
        console.log(`Roger that! ${message}`);
        socket.send(message);
    });
});
