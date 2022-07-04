const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
require('dotenv').config({ path: '.env' });


const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use('/projects',require('./routes/project'));

app.use('/clients',require('./routes/clients'));

app.use('/supervisors',require('./routes/supervisors'));

app.use('/api/timesheet', require('./routes/timesheet'));

app.use('/api/users', require('./routes/user'));

app.use('/api/entite', require('./routes/entiteRoute'));

app.use('/frais',require('./routes/frais'));

app.listen(1000,()=>{
    console.log("| ** server working successfully ** |")
}) 