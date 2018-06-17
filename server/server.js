import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function(err){
    if(err) {
        console.error(err);
    }
    else {
        open('http://localhost:' + port);
    }
})