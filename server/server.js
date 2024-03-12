const express = require('express');
const app = express()

app.use('/', (req, res)  => {
    res.send('API on process....');    
});


app.listen('5000', () => {
    console.log(`Server yeta xa http://localhost:5000`);
})