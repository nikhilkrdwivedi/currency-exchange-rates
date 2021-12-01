import express from 'express';
import http from 'http';
import * as io from 'socket.io';
import cors from 'cors';
import {currencyExchangePublisher} from './publishCurrency.js'


const application = express();
application.use(express.static('public'));
application.use(express.json());
application.use(cors());
const server = http.createServer(application);
const PORT = process.env.PORT || 3000;

// Test api
application.get('/test-v1', (req, res) => {
    res.status(200).json({ message: 'Server is up and running...',data: new Date() });
  });
export const socketServer = new io.Server(server, {
    cors: {
      origins: ['http://localhost:4200']
    }
});

socketServer.on('connection', client => {
    currencyExchangePublisher()
    client.on('connected', data => { console.log('User is connected.....')});
    client.on('disconnect', () => {   console.log('User disconnected.....') });
  });
server.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
});
export default socketServer
