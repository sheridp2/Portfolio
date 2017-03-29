'use strist';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

const conString = 'postgres://patrick:test@localhost:5432/kilovolt';
const client = new pg.Client(conString);
client.connect();
client.on('error', function(error) {
  console.error(error);
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('*', function(request, response){
  response.sendFile('index.html', {root:'.'})
});

app.listen(PORT, function() {
  console.log('localHost:',PORT);
});


function loadProjects() {

}

function loadDB(){
  client.query(`
    CREATE TABLE IF NOT EXISTS
    projects(
      project_id SERIAL PRIMARY KEY,
      projects VARCHAR(100) UNIQUE NOT NULL,
      image VARCHAR(100)
      projectUrl VARCHAR(100)
    );`
  )
  .then(function(data){
    loadProjects(data);
  })
  .catch(function(err){
    console.error(err);
  });
}
