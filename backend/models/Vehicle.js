const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: String,
    number: String,
    status: String,
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);