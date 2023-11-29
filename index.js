const express = require('express');
const app = express();
const cors = require("cors");
const Route = require('./route');

app.use(cors());
app.use("/api/v1", Route);

app.listen(3000, () => {
    console.log('Express app listening on port 3000!');
});