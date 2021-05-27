const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const loads = require('./routes/api/loads');
const auth = require('./routes/api/authenticate');
const messages = require('./routes/api/messages');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/loads', loads);
app.use('/api/authenticate', auth);
app.use('/api/messages', messages);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));