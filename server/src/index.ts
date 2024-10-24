import express, { type Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());

const port = 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})