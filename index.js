const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('I am learning express js with node js. okay, very good!! What do you want now??');
})

const users = [
    {id: 1, name: 'robin', email: 'robin@gmail.com', address: 'dhaka'},
    {id: 2, name: 'asad', email: 'asad@gmail.com', address: 'borishal'},
    {id: 3, name: 'rakin', email: 'rakin@gmail.com', address: 'foridpur'},
    {id: 4, name: 'shohel', email: 'shohel@gmail.com', address: 'dhaka'},
    {id: 5, name: 'nirob', email: 'nirob@gmail.com', address: 'jamalpur'},
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'bananna', 'orange', 'watermelon', 'coconut']);
});

app.get('/fruit/mango', (req, res) => {
    res.send('Mango is my altime favourite!');
})

app.listen(port, () => {
    console.log('Listening from : ', port);
})