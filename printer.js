//var dialog = require('dialog');
var app =require('./app')

function printMessage(city, temp, tempsF) {
	console.log('A ' + city + ' il fait ' + temp + ' celsius et  ' + tempsF + ' farheneit')	
	//dialog.info(city + ' ' + temp );
	app.sendInView(city, temp)
}
function printError(error) {
	console.error(error.message)
}

module.exports.printMessage = printMessage
module.exports.printError = printError