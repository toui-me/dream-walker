const express = require('express');
const morgan = require('morgan')
const app = express();
const dreamsRouter = require('./dreamsRouter');
const dashboardRouter = require('./dashboardRouter');

app.use(express.static('public'));
app.use(morgan('common'));

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/dashboard', dashboardRouter);

app.use('/dreams', dreamsRouter);


module.exports = server;