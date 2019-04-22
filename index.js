const express = require('express');
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database');
const routes = require('./routes/employee-routes')

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); //notify on server petition of client
app.use(express.json());

//Routes
app.use('/api/employees/', routes);


//Starting the server
app.listen(app.get('port'),() =>{
    console.log('Server running on port', app.get('port'));
});
