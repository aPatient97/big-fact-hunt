const dotenv = require('dotenv');
dotenv.config();

const server = require('./app');
const io = require("socket.io")(server, {
    cors: {
      origin: '*',
    }
});

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Express is running on port ${port}`));

io.on('connection', socket => {
    console.log("New connection has been made..."); // runs when client first connects

    // get total number of client connections
    const participantCount = io.engine.clientsCount;

    // send event only to new connecting client
    socket.emit('admin-message', 'Hi there, new fact hunter!');
    // send event to all other clients (not new connecting client)
    socket.broadcast.emit('admin-message', `A new fact hunter has arrived!`);
    // send event to all clients
    io.emit('admin-message', `There ${participantCount === 1 ? "is 1 fact hunter": `are ${participantCount} fact hunters`} here now!`);

    io.emit('client-number',participantCount);
    socket.on("disconnect", socket => { // runs when client disconnects
        console.log("Goodbye...");
    });
});

// server.listen(port, () => {
//     console.log(`Open for play on port ${port}!`)
// });
