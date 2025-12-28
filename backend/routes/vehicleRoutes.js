const express = require("express");
const Vehicle = require("../models/Vehicle");
const router = express.Router();

router.get("/", async(req, res) => {
    const vehicles = await Vehicle.find().populate("driver");
    res.json(vehicles);
});

router.post("/", async(req, res) => {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.json(vehicle);
});

router.put("/:id", async(req, res) => {
    const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body);
    res.json(updated);
});

module.exports = router;