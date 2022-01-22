const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  function(err, database) {
    if(err) {
      if (process.env.DEBUG) {
      throw err;
      }
      return;
    }
  });
// logs mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
