const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')

const { dbConnection } = require('./config/config');
const { handleTypeError } = require('./middlewares/errors');

app.use(cors())
app.use(express.json());

dbConnection();

app.use(handleTypeError)

app.use('/usuarios', require('./routes/usuarios'));
app.use('/sponsors', require('./routes/sponsors'));
app.use('/recintos', require('./routes/recintos'));
app.use('/eventos', require('./routes/eventos'));
app.use('/programaciones', require('./routes/programaciones'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
