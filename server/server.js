const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath =path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

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

	socket.on('createEmail',(newEmail)=>{
		// console.log('createEmail', newEmail);
	});

		socket.on('createMessage',(createdMessage)=>{
		console.log(createdMessage);
		io.emit('newMessage',{
			from:createdMessage.from,
			text:createdMessage.text,
			createdAt: new Date().getTime()
		});
	});
	socket.on('disconnect',()=>{
			console.log('User disconnect');
		});


});


server.listen(port, () => {
	console.log(`Server is up on ${port}`);
});
