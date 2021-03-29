const app = require('express')();

app.use('/hello', (req, res, next) => {
  res.status(200).send({ msg: 'hello!!!' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'SORRY!!!!' });
});

module.exports = app;
