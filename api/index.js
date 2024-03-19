import express from 'express';
import cors from 'cors';
import addRoutes from './routes/add.js';
import getRoutes from './routes/getTask.js';
import deleteRoutes from './routes/delete.js'
import updateRoutes from './routes/update.js'
const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
// Mount your routes
app.use('/api', addRoutes);
app.use('/api', getRoutes);
app.use('/api', deleteRoutes)
app.use('/api', updateRoutes)
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
