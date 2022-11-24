const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // message to confirm connection established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SOH");
  });

  // move the snake up
  // conn.on("connect", () => {
  // set interval to move the snake up every 50ms
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);
  // console.log("Snake is moving up"); // Message to confirm snake is moving up
  // });

  return conn;
};

module.exports = { connect };
