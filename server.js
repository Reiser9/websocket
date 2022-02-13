const WebSocket = require('ws');

const server = new WebSocket.Server({
	port: 3000
});

server.on('connection', ws => {
	ws.on('message', message => {
		if(message === 'exit'){
			ws.close();
		}
		else if(message.trim() === ''){
			return;
		}
		else{
			server.clients.forEach(client => {
				if(client.readyState === WebSocket.OPEN){
					client.send(message);
				}
			});
		}
	});
	ws.send('Добро пожаловать на Expcash!');
});