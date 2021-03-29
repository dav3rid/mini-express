const app = require('express')();

app.use('/hello', (req, res, next) => {
  return res.status(200).send({ msg: 'hello!!!' });
  console.log('This should break when linting!');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'SORRY!!!!' });
});

module.exports = app;
