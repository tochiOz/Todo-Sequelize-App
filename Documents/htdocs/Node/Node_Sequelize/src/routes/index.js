import { Router } from 'express';
const router = new Router();

//welcome message;
router.get('/', (req, res) => {
	return res.status(200).send({
		message: 'Welcome to the Todo Api PostgreSQL and Sequelize App'
	});
});

export default router;
