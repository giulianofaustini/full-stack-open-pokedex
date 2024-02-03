/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get('/version', (req, res) => {
  res.send('This is one with two') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
