	let socket =io();
		socket.on('connect',function(){
			console.log('Connected to server')

			// socket.emit('createEmail', {
			// 	to: 'norea@gmail.com',
			// 	text: 'YahYahYahYah'
			// });

			// socket.emit('createMessage',{
			// 	from: "tutz",
			// 	text: "yYyYYyYyYyYyYyyYyY"
			// });

		});
		socket.on('disconnect',function(){
			console.log('Diconnected to server');
		});

	socket.on('newEmail', function(email){
		// console.log('New Email',email);
	});

	socket.on('newMessage',function(newMessage){
		console.log(newMessage);
		let li = $('<li></li>');
		li.text(`${newMessage.from}: ${newMessage.text}`);

		$('#messages').append(li);
	});
		socket.on('newLocationMessage', function (message){
			let li = $('<li></li>');
			let a = $('<a target="_blank"> My current Location</a>');
			li.text(`${message.from}:`);
			a.attr('href',message.url);
			li.append(a);
			$('#messages').append(li);
		});
	// socket.emit('createMessage', {
	// 	from: 'tute',
	// 	text: 'Hi'
	// }, function (data){
	// 	console.log('got it', data);
	// });

	$('#message-form').on('submit', function (e) {
		e.preventDefault();

		let messageTextbox = $('[name=message]');

		socket.emit('createMessage', {
			from: 'User',
			text:messageTextbox.val()
		}, function (){
			messageTextbox.val('');
		});
	});


	let locationButton = $('#send-location');

	locationButton.on('click', function (){
	if (navigator.geolocation) {
		
    navigator.geolocation.getCurrentPosition(function(position) {
    	socket.emit('createLocationMessage',{
    		latitude: position.coords.latitude,
    		longitude: position.coords.longitude
    	});
    }, function(error) {
  		alert('Unable to fetch location');
    });
} else {
   console.log('Geolocation not supported to your browser');
}
	});