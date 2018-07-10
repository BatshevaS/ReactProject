let express = require('express');

let app = express();

app.use(express.static('view'));

app.listen(3500);