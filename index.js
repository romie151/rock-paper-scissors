const express = require('express') // import express
const api = express() // create an express server
const port = 8000; // we will use this later


var options = ['rock', 'paper', 'scissor'];

api.get('/', (req, res) => {
    res.send("<p>Enter rock, paper or scissors</p>");
});

api.get('/:user', (req, res) => {
    if (options.includes(req.params.user)) {
        let ai =options[Math.floor(Math.random() * options.length)];
        req.params.ai = ai;
    } else {
        res.send("<p>You did not enter a valid entry</p>");
    }

    if (req.params.ai === req.params.user ) {
        let result = "Tie";
        req.params.result = result;
        res.send(`<p>Tie</p> ${JSON.stringify(req.params)}`)
    } else if(
        (req.params.ai === options[0] && req.params.user === options[2]) || 
        (req.params.ai === options[1] && req.params.user === options[0]) || 
        (req.params.ai === options[2] && req.params.user === options[1])
    ){
        let result = "Lose";
        req.params.result = result;
        res.send(`<p>Lose</p> ${JSON.stringify(req.params)}`)
    } else if(
        (req.params.ai === options[0] && req.params.user === options[1]) || 
        (req.params.ai === options[1] && req.params.user === options[2]) || 
        (req.params.ai === options[2] && req.params.user === options[0])
    ){
        let result = "Win";
        req.params.result = result;
        res.send(`<p>Win</p> ${JSON.stringify(req.params)}`)
    }
    res.send(req.params);
});


api.listen(port, () => {
    console.log(`Listening to port ${port}`)
});

