let express = require('express')
let events = require('events')
let bodyParser = require('body-parser')
let weather = require('./weather') 
let app = express()

let country = ""
let city = ""
let temp = ""
let myEvent = new events.EventEmitter()
//let country = 'fr'
//let city = 'paris'
// var cities = ['','','']
//let cities = process.argv.slice(2)
var sendInView = function(cityData, tempData) {
	console.log(cityData, tempData)
	city = cityData
	temp = tempData

	return
}

app.set('view engine', 'ejs') 

app.use('/assets', express.static('assets'))

app.get('/', (request, response) => {
	// process.env.NODE_ENV
	var data = { city, temp }
	response.render('pages/index', {city: data.city, temp: data.temp})
})



//////////////
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParserjson(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());


app.post('/', (request, response) => {

	country = request.body.country
	city = request.body.city
	var data = { city, temp }
	//cities.forEach(function(city)
	//{
	weather.get(city, country)
	
	response.render('pages/index', {temp: temp, city: city, country: country})
	
})



module.exports.sendInView = sendInView

app.listen(8080)