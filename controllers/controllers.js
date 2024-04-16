// controller.js
const HttpError = require("../errorHttp/error");
dotenv = require("dotenv").config();
const axios = require('axios');

const welcome = (req, res) => { 
    res.status(200).json({ message: "Welcome to Weather API, give a /city name to get weather information." });
}

const fetchData = async (req, res, next) => {
    const city = req.params.city;
    const apiKey = process.env.API_KEY; // Corrected variable name
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
        res.status(200).json({ weather: response.data });
    } catch (error) {
        return next(new HttpError(error, 500)); // Corrected error object
    }
}

module.exports = { welcome, fetchData };
