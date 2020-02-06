import express from 'express';
import morgan from 'morgan';

//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/task';

const app = express();

//middlewares
app.use(morgan('dev'));
// app.use(json());

//routes
app.use(projectRoutes);
app.use(taskRoutes);

export default app;
