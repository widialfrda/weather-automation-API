import supertest from 'supertest';

//Requesr to url
const request = supertest("https://api.weatherbit.io/v2.0/");

//Constant Variable
const Token_key = 'e667768b943a41fd87808a9838327aff'; // Use my own API key
const Lat = 40.730610;
const Lon = -73.935242;
const PostalCode = 28546;
const Hour = 3;

describe('ApiTest', () => {

	// GET the value of the /data/state_code 
	it('GET /current?lat={lat}&lon={lon}', () => {
		request.get(`current?lat=${Lat}&lon=${Lon}&key=${Token_key}`).end((err,res) => {
			console.log(err);
			console.log(res.body);
			console.log("The state code for lat = ", `${Lat}`, "and lon = ", `${Lon}`, "is", res.body.data[0].state_code);
		});
	});


	// GET time and weather from data entries
	it('GET /forecast/hourly?postal_code={postal_code}&hours={hours}', () => {
		request.get(`forecast/hourly?postal_code=${PostalCode}&hours=${Hour}&key=${Token_key}`).end((err,res) => {
			console.log(err);
			console.log(res.body);
			for (var i = 0; i < `${Hour}`; i++){
                console.log(i+1, "hour(s) forecast:", [res.body.data[i].timestamp_utc, res.body.data[i].weather.description]);
            }
		});
	});
});