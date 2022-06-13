const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
require('dotenv').config({ path: '.env' });

// const UserRoutes = require('./routes/user');
// const StyleSheetRoutes = require('./routes/timesheet');

// creation of the server
const app = express();
// connect the database
connectDB();
// connect cors
app.use(cors());
// JSON format for cmd
app.use(express.json());

app.use('/projects',require('./routes/project'));
// app.get('/',(req,res)=>{
//     res.send("Succes");
// })
app.use('/clients',require('./routes/clients'));

app.use('/supervisors',require('./routes/supervisors'));

app.use('/api/timesheet', require('./routes/timesheet'));

app.use('/api/users', require('./routes/user'));



app.listen(1000,()=>{
    console.log("| ** server working successfully ** |")
}) 