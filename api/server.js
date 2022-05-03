const dotenv = require('dotenv');
dotenv.config();
// Importing the socket file to be used
require('./socket');
const server = require('./app');
// const io = require("socket.io")(server, {
//     cors: {
//       origin: '*',
//     }
// });

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Express is running on port ${port}`));

// io.on('connection', socket => {
//     console.log("New connection has been made..."); // runs when client first connects

//     // get total number of client connections
//     const participantCount = io.engine.clientsCount;

//     // send event only to new connecting client
//     socket.emit('admin-message', 'Hi there, new fact hunter!');
//     // send event to all other clients (not new connecting client)
//     socket.broadcast.emit('admin-message', `A new fact hunter has arrived!`);
//     // send event to all clients
//     io.emit('admin-message', `There ${participantCount === 1 ? "is 1 fact hunter": `are ${participantCount} fact hunters`} here now!`);

//     io.emit('client-number',participantCount);

//     // data param is an object of values sent from the form e.g: {roomName: e.target.roomName.value, username: e.target.username.value}
//     socket.on("join-room", async data => {
//         // When a user joins a new room removes them from their previous room
//         Array.from(socket.rooms)
//             .filter((r) => r !== socket.id)
//             .forEach((r) => socket.leave(r));
//         io.sockets.adapter.rooms.has(data.roomName) ? console.log('this room already exists') : console.log('this is a new room');
//         if ( io.sockets.adapter.rooms.has(data.roomName) ){
//             socket.emit('room-status', 'This room already exists!')
//         } else {
//             await socket.join(data.roomName);
//             console.log(`${data.username} joined ${data.roomName}`);
//             console.log(socket.rooms);
//             // socket.rooms.has(data.roomName) ? console.log('Successfully entered room!') : console.log('Not in room!');
//             // url param is a string that contains the API link
//             socket.on('create-room', url => {
//                 io.to(data.roomName).emit('room-url', url);
//                 socket.to(data.roomName).emit('create-room', true);
//             })
//             // Tell everyone a user joined
//             socket.broadcast.to(data.roomName).emit("join-room", `${data.username} has joined the room!`);
//             console.log(io.sockets.adapter.rooms);
//             // Notifies everyone that a specific user has left
//             socket.on('disconnect', () => {
//                 io.to(data.roomName).emit("join-room", `${data.username} has left!`)
//             })
//         }
//       });

//     socket.on("disconnect", () => { // runs when client disconnects
//         // io.to(data.roomName).emit("join-room", `${data.username} has left!`)
//         console.log("Goodbye...");
//     });
// });

// server.listen(port, () => {
//     console.log(`Open for play on port ${port}!`)
// });
