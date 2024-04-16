// index.js
const express = require("express");
require("dotenv").config();
const app = express();
const HttpError = require("./errorHttp/error");
const cors = require('cors');

app.use(cors());
const userRoutes = require('./userRoute/userRoute');

app.use('/api', userRoutes);

app.use((error, req, res, next) => {
    console.error(error.stack);
    return next(new HttpError(error, 500));
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
