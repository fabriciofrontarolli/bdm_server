const express 	 = require('express');

const bodyParser = require('body-parser');
const cors			 = require('cors');
const mongoose	 = require('mongoose');

const app 			 = express();
const port 			 = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

Donor = require('./models/donor');

// Connect to Mongoose
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect('mongodb://bdm:bdm@ds063892.mlab.com:63892/bdm', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error on remote server MLab'));

app.get('/api/donors', (req, res) => {
	Donor.getDonors((err, donors) => {

		if (err) { throw err; }

		res.json(donors);
	});
});

app.post('/api/donors', (req, res) => {
	const donor = req.body;
	donor.ip = req.connection.remoteAddress;
	Donor.addDonor(donor, (err, donor) => {

		if (err) { throw err; }

		res.json(donor);
	});
});


app.listen(port);
console.log(`Running on port ${port}...`);
