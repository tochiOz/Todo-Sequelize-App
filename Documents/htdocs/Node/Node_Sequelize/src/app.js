import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

//importing routes
import route from './routes';

const app = express();

//middlewares
app.use(morgan('dev'));

//parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
route(app);

export default app;
