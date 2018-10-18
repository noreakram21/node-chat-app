const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath =path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
const {generateMessage, generateLocationMessage} = require('./utils/message');
//app.listen(port, () => { console.log(`App listening on port ${port}!`); })

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	console.log('new user connected');

	// socket.emit('newEmail',{
	// 	from: 'monroy.markaeron@gmail.com',
	// 	text: 'yeah',
	// 	createAt: 123
	// });

	// socket.emit('newMessage',{
	// 	from: 'Mark Aeron',
	// 	text: 'zZZzZzZzZzZzZzZzzZzZzZ',
	// 	create:21312432
	// });
		socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app'))
		

		socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));



	socket.on('createEmail',(newEmail)=>{
		// console.log('createEmail', newEmail);
	});

		socket.on('createMessage',(createdMessage, callback)=>{
		console.log(createdMessage);
		io.emit('newMessage', generateMessage(createdMessage.from,createdMessage.text));
			callback();	
	});

		socket.on('createLocationMessage', (coords) =>{
			io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude, coords.longitude));
		});
	socket.on('disconnect',()=>{
			console.log('User disconnect');
		});


});


server.listen(port, () => {
	console.log(`Server is up on ${port}`);
});
