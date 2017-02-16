const mongoose = require('mongoose');

// Donor Schema
const donorSchema = mongoose.Schema({
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	contactNumber:{
		type: String,
		required: true
	},
	emailAddress:{
		type: String,
		required: true
	},
	bloodGroup:{
		type: String,
		required: true
	},
	ip:{
		type: String,
		required: true
	},
	coordinates:{
		type: String,
		required: true
	}
});

const Donor = module.exports = mongoose.model('Donor', donorSchema);

// Get Donors
module.exports.getDonors = (callback, limit) => {
	Donor.find(callback).limit(limit);
}

// Add Donor
module.exports.addDonor = (donor, callback) => {
	Donor.create(donor, callback);
}

// Get Donors By Coordinates
module.exports.getDonorById = (id, callback) => {
	Donor.findById(id, callback);
}
