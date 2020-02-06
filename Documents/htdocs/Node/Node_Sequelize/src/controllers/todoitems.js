const TodoItem = require('./../models').TodoItem;

module.exports = {
	async createTodoItem(req, res) {
		try {
			const createdTodoItem = await TodoItem.create({
				content: req.body.content,
				todoId: req.params.todoId
			});

			res.status(200).send(createdTodoItem);
		} catch (e) {
			return res.status(400).send(e.message);
		}
	}
};
