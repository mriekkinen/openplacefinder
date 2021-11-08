import express from 'express';
import morgan from 'morgan';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('frontend'));

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
