import  dotenv from "dotenv";
import express from 'express'
import { Server } from 'socket.io';
import { Message, MessageRequest } from "./models";


dotenv.config();

const app = express();
const server = app.listen(3000, () => console.log('App started on port 3000'));

const socketIo = new Server(server, {
  cors: {
    // TODO: Change before go live
    origin: '*'
  }
})

socketIo.on("connection", (socket) => {
  socket.on("message", (message) => {
    const request = message as MessageRequest;
    const groupId = request.groupId;
    
    socket.join(groupId);
    socketIo.to(groupId).emit('message', {
      type: request.type,
      message: message?.message,
      groupId: request.groupId
    } as MessageRequest);
  });
});
