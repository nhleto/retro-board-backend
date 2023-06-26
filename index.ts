import { WebSocket } from "ws";
import  dotenv from "dotenv";
import express, { Express, Request, Response } from 'express';

dotenv.config();

const socketServer = new WebSocket.Server({ port: 8080 });

socketServer.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(`Roger that! ${message}`);
    socket.send(message);
  });
});
