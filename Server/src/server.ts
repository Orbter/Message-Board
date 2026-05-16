import 'dotenv/config';

import express, { Request, Response } from 'express';
import cors from 'cors';
import nameRoutes from './routes/name.routes';

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', nameRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
