const app = require('./app/app');
const express=require('express');
const http = require('http').Server(app);
const path=require('path');

const port = process.env.PORT || 3000

http.listen(port, () => {
    console.log(`Server listen at ${port}`)
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/views/index.html');
    });

})