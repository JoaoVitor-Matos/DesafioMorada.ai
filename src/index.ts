import express from 'express';
import bodyParser from 'body-parser';
import saqueRouter from './routes/withdraw';

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use('/api', saqueRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
