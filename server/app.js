(
    function() {
        "use strict";
        const socketIOClient = require("socket.io-client");

        /** express initialization */

        const express = require("express");
        const http = require("http");
        const socketIo = require("socket.io");
        const axios = require("axios");
        const SERVER_ID = "03S"
        const port = process.env.PORT || 4002;
        const index = require("./index");

        const app = express();
        app.use(index);

        const server = http.createServer(app);
        server.listen(port, () => console.log(`Listening on port ${port}`));
        const io = socketIo(server); // < Interesting!
        /** create socket io server */


        const UserStore = require("./clientDataStore");

        io.on('connection', function (socket) {
            console.log("Connected Socket = " + socket.id);

            socket.on('disconnect', function(){
                console.log("Disconnected Socket = " + socket.id);
                UserStore.remove(socket.id)
            });

            socket.on('server_client', function (data) {
                console.log("Server node id"+ data)

            });




        });



        /** create socket io client*/

        let client = require("socket.io-client");
        var socket1 = client.connect("http://127.0.0.1:4003");


        socket1.on('connect', function (data) {
            var ip = require("ip");
            socket1.emit('SERVER_CONNECT', { customId: SERVER_ID , ip :ip.address() + ":" +server.address().port});
        });

        socket1.on("activeNodeList", (data) => {
            console.log("from signalling server" + data)
            createNewPeerConnection(data)

        });

        function createNewPeerConnection(data) {
            console.log(data);

            data.forEach(function (item,index) {
                console.log(item);

                var socket1 = require('socket.io-client')("http://"+item.ip+"", {
                    forceNew: true
                });

                socket1.emit('server_client',SERVER_ID);

            })



        }
    }()
);
