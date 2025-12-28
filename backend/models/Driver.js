const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: String,
    licenseNumber: String
});

module.exports = mongoose.model("Driver", driverSchema);