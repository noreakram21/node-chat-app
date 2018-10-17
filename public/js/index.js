	let socket =io();
		socket.on('connect',function(){
			console.log('Connected to server')

			socket.emit('createEmail', {
				to: 'norea@gmail.com',
				text: 'YahYahYahYah'
			});

			socket.emit('createMessage',{
				from: "tutz",
				text: "yYyYYyYyYyYyYyyYyY"
			});

		});
		socket.on('disconnect',function(){
			console.log('Diconnected to server');
		});

	socket.on('newEmail', function(email){
		console.log('New Email',email);
	});

	socket.on('newMessage',function(newMessage){
		console.log(newMessage);

	});