const express = require("express");
const app = express();
const PORT = 8080;


const { dbConnection } = require("./config/config");

app.use(express.json());

dbConnection();

app.use('/usuarios', require('./routes/usuarios'));
app.use('/sponsors', require('./routes/sponsors'));
app.use('/recintos', require('./routes/recintos'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
