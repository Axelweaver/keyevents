	var data = { };

// show the data of event
function show(event, type) {

	var jsonOutputElement = document.getElementById('jsonOutput');

	if(!event){
		return;
	}

	var eventData =  {
		charCode: event.charCode,
		code: event.code,
		key: event.key,
		keyCode: event.keyCode,
		which: event.which,
		shiftKey: event.shiftKey,
		type: event.type
	};
	
	switch (type) {
		case 'keydown':
			data.keyDownEvent = eventData;
			break;
		case 'keyup':
			data.keyUpEvent = eventData;
			break;
		case 'keypress':
			data.KeyPressEvent = eventData;
			break;
		default:
			data.KeyPressEvent = eventData;
			break;
	}
	
	jsonOutputElement.innerHTML = JSON.stringify(data, undefined, 4);
}
	
document.addEventListener('keydown', function(event) {
	console.log('keydown', event);
	
	show(event, 'keydown');
});

document.addEventListener('keyup', function(event) {
	console.log('keyup', event);

	show(event, 'keyup');
});

document.addEventListener('keypress', function(event) {
	console.log('keypress', event);

	show(event, 'keypress');
});
