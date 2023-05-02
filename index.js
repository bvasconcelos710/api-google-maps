const express = require('express');
const app = express();
const port = 3001;
const pontoRouter = require('./routes/PontoRouter');

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/pontos', pontoRouter);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
