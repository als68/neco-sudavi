const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 4000;
const SurveyData = db.surveydata;
const pool = db.sequelize.connectionManager.pool;
const mySchema = require('./schema');

/*  MIDDLEWARE  */

// for dev: logs all requests
app.use('/graphql', (req, res) => {
  return graphqlHTTP({
    schema: mySchema,
    graphiql: true,
    context: { pool }, // available to all graphql resolve as the third argument
  })(req, res);
});

app.use('/testQuery', (req, res) => {
  var query = '{ surveyRecords {Gender} }';

  graphql(mySchema, query).then(result => {
    let allb = result
    let tallies = []
    allb.data.surveyRecords.forEach(function (elem) {
        let x = findIndex(elem, tallies)
        if (typeof x === 'number') {
          tallies[x][1] = tallies[x][1] + 1
        } else {
          tallies.push([elem.Gender, 1])
        }
      })
    res.send(tallies)
  });
});

function findIndex (elem, tallies) {
  for (var i = 0; i < tallies.length; i++) {
    if (elem.Gender === tallies[i][0]) {
      return i
    }
  }
  return 'the fail frog';
}

app.use(function(req, res, next) {
  next();
 });

app.use(express.static('public'));

app.get('/api/stuff', (req, res) => {
  surveydata.findOne({
    where: { NetworkID : '4074a06017' }
  })
    .then(function(data, err){
      // in terminal window
      console.log('data: ', data.dataValues);
      if(err) console.log('error: ', err);
      res.json(data.dataValues);
    });
});

app.listen(PORT, () => {
  db.sequelize.sync(); // Sync all models that aren't already in the database
  console.log(`Server running on http://localhost:${PORT}`);
});