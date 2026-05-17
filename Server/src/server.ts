import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nameRoutes from './routes/name.routes';
import postRoutes from './routes/post.routes';
import commentRoutes from './routes/comment.routes';
const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Main App Routes
app.use('/api', nameRoutes);
app.use('/post', postRoutes);
app.use('/comments', commentRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
