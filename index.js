const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();

require('./db');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('<h1>App is working!</h1>');
})

app.listen(PORT, ()=> {
    console.log("Your server is listening on PORT: ", PORT);
}).on('error', (err)=> {
    console.log('Server listen error. Another server is probably on the same port')
})