const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(proces.env.PORT || 4300, function(){
    console.log('Mercado Libre prendido');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});