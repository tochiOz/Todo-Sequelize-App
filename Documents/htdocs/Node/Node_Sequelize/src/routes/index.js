import todo from './todo';
import todoItem from './todoitem';

export default (app) => {
	app.get('/api/v1', (req, res) =>
		res.status(200).send({
			status: 'success',
			data: 'Welcome to the Todo Api PostgreSQL and Sequelize App'
		})
	);

	app.get('/', (req, res) => {
		res.status(200).send('Welcome to chess naija');
	});
	app.use('/api/v1', [ todo, todoItem ]);

	app.all('/*', (req, res) =>
		res.status(404).send({
			status: 'error',
			error: 'This route is unavailable on this server'
		})
	);
};
