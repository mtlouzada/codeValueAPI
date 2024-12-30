import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import salaryRoutes from './routes/salaries';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/salaries', salaryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
