const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:3000');

function setStatus(value){
	status.innerHTML = value;
}

function printMessage(value){
	const div = document.createElement('div');

	div.innerHTML = value;
	messages.appendChild(div);
}

form.addEventListener('submit', event => {
	event.preventDefault();
	ws.send(input.value);
	input.value = '';
})

ws.onopen = () => setStatus('Online');
ws.onclose = () => setStatus('Disconnect');
ws.onmessage = response => printMessage(response.data);