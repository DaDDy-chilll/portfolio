/* eslint-disable no-undef */
const http = require('http')
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const api = require('./routes/api');
const app = express();
const server = http.createServer(app)
const PORT = 3000;




app.use(cors(
    {origin:'http://localhost:5173',methods:['GET']}
))
app.use(morgan( 'dev'));

app.use('/api/v1',api)
app.get('*',(req,res) => {
    res.send('route doesn\'t defined.')
})

server.listen(PORT,()=> console.log(`server is running on port:${PORT}`))