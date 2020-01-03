require('dotenv').config()
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios").default;

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client client connected");
})

function getChannels() {
  setInterval(() => {
    console.log('send channels')
  }, 1000)
}

const userList = ['opti_21', 'Veryhandsomebilly', 'ThePrimeagen']

function getTwitchIDs(userList) {
  let userJoin = userList.join('&login=')
  let users = userJoin.toLowerCase()
  let twitch = axios.create({
    baseURL: `https://api.twitch.tv/helix/users?login=${users}`,
    timeout: 1000,
    headers: { 'Client-ID': process.env.TWITCH_CLIENTID }
  });

  twitch.get()
    .then(res => {
      console.log(res.data.data)
      let data = res.data.data
      let userIDs = []
      data.forEach(e => {
        userIDs.push(e.id)
      })
      console.log('UserIDs: ' + userIDs)
      getStreamStatuses(userIDs);
    })
    .catch(err => {
      console.error(err)
    })

}

function getStreamStatuses(userIDs) {
  let userJoin = userIDs.join('&user_id=')
  let users = userJoin.toLowerCase()
  let twitch = axios.create({
    baseURL: `https://api.twitch.tv/helix/streams?user_id=${users}`,
    timeout: 1000,
    headers: { 'Client-ID': process.env.TWITCH_CLIENTID }
  });

  twitch.get()
    .then(res => {
      console.log(res.data.data)
    })
    .catch(err => {
      console.error(err)
    })
}

getTwitchIDs(userList);

// getChannels();

server.listen(port, () => console.log(`Listening on port ${port}`));
