import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

//importing routes
import todoRoutes from './routes/todo';
import indexRouters from './routes/index';
import todoItemsRouter from './routes/todoitem';

const app = express();

//middlewares
app.use(morgan('dev'));

//parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) =>
// 	res.status(200).send({
// 		message: 'You Have An Error, Check it out.'
// 	})
// );

//routes
app.use('/api/v1', [ indexRouters, todoRoutes, todoItemsRouter ]);

export default app;
