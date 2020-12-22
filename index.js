const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('</> By Nitro#0177 w/ ❤'));

app.listen(port, () => console.log(`This app is listining on http://localhost:${port}`));
