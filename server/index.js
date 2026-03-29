const express = require('express');

const app = express();

const WSServer = require('express-ws')(app);

const aWss = WSServer.getWss();

const PORT = process.env.PORT ?? 5000;

app.ws('/', (ws, req) => {
    console.log('CONNECTED');
    ws.send('Connect are success')
    ws.on('message', (msg) => {
        msg = JSON.parse(msg);
        switch (msg.method) {
            case 'connection':
                break;
            case 'message':
                break;
        }
    });
});

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));

const connectionHandler = (ws, msg) => {
    ws.id = msg.id;
    broadcastConnection(ws, msg);
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if(client.id === msg.id) {
            client.send(`User ${msg.username} connected`);
        }
    })
}