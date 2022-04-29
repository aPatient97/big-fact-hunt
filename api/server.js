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

    socket.on("join-room", async data => {
        Array.from(socket.rooms)
            .filter((r) => r !== socket.id)
            .forEach((r) => socket.leave(r));
        await socket.join(data.roomName);
        console.log(`${data.username} joined ${data.roomName}`);
        console.log(socket.rooms);
        socket.rooms.has(data.roomName) ? console.log('Successfully entered room!') : console.log('Not in room!');
        // Tell everyone a user joined
        io.to(data.roomName).emit("join-room", `${data.username} has joined the room!`);
      });

    socket.on("disconnect", () => { // runs when client disconnects
        console.log("Goodbye...");
    });
});

// server.listen(port, () => {
//     console.log(`Open for play on port ${port}!`)
// });
