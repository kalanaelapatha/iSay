




import openSocket from 'socket.io-client';

const port = process.env.PORT ? process.env.PORT - 100 : 3000
const reFixedPortForBackend = (port) + 100;

const  socket = openSocket('http://localhost:'+ reFixedPortForBackend);


console.log("http://localhost:"+ reFixedPortForBackend)

function subscribeToTimer() {
    socket.emit('server_client', 122222);
}

function login(object) {
    socket.emit('login_request', object);

}

export { subscribeToTimer , login};
