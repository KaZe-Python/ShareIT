const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/pages/')));
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/pages/', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server started");
})