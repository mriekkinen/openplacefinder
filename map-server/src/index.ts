import express from 'express';
import morgan from 'morgan';
import overpassRouter from './routes/overpass';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.text());
app.use(express.static('frontend'));

const PORT = 3001;

app.use('/api/overpass', overpassRouter);

app.use((_req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
