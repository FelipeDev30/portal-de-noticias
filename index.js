const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile); // Set EJS as the template engine
app.set('view engine', 'html'); // Use .html files for views
app.use('/public', express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.set('views', __dirname + '/views'); // Set the views directory

app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`);
});

// Route to render the main page
app.get('/', (req, res) => {
    console.log(req.query);

    if(req.query.busca == null){
        res.send('home');
    } else {
        res.send(`Você buscou ${req.query.busca}`);
    }
});

app.get('/:slug', (req, res) => {
    res.send(req.params.slug);
})

