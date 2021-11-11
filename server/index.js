const express = require('express');
const compression = require('compression');

const app = express();
const PORT = 3000;

app.use(compression());

app.use(express.static('client/public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});