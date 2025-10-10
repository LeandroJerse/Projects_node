import express from 'express';
import publicRoutes from './routes/public.js';

const app = express();

// Middleware para processar JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));



app.use('/', publicRoutes);

app.listen(3000, () => { console.log('Server is running on port 3000') })
