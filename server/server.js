require('dotenv').config()
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios").default;

const port = process.env.PORT || 4002;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client client connected");
  socket.on('disconnect', () => console.log('Client disconnected'));
})

function getChannels() {
  setInterval(() => {
    console.log('send channels')
  }, 1000)
}

const userList = ['opti_21', 'VeryHandsomeBilly', 'ThePrimeagen']

function getStreamStatuses(userList) {
  let userJoin = userList.join('&login=')
  let users = userJoin.toLowerCase()
  let twitch = axios.create({
    baseURL: `https://api.twitch.tv/helix/users?login=${users}`,
    timeout: 1000,
    headers: { 'Client-ID': process.env.TWITCH_CLIENTID }
  });

  twitch.get()
    .then(res => {
      let data = res.data.data
      let userIDs = []
      data.forEach(e => {
        userIDs.push(e.id)
      })
      let userIDJoin = userIDs.join('&user_id=')
      let usersids = userIDJoin.toLowerCase()
      let twitch = axios.create({
        baseURL: `https://api.twitch.tv/helix/streams?user_id=${usersids}`,
        timeout: 1000,
        headers: { 'Client-ID': process.env.TWITCH_CLIENTID }
      });

      twitch.get()
        .then(res => {
          console.log(new Date().toTimeString())
          console.log(res.data.data)
          io.emit('FromAPI', res.data.data)
        })
        .catch(err => {
          console.error(err)
        })
    })
    .catch(err => {
      console.error(err)
    })

}

function streamInterval() {
  setInterval(() => {
    getStreamStatuses(userList);
  }, 5000);
}

streamInterval();

// getChannels();

server.listen(port, () => console.log(`Listening on port ${port}`));
