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
	},

	async updateTodoItem(req, res) {
		try {
			const isupdateTodoItem = await TodoItem.findOne({
				where: {
					id: req.params.todoItemId,
					todoId: req.params.todoId
				}
			});

			if (!isupdateTodoItem) {
				return res.status(404).send({
					message: 'TodoItem Not Found!!!!!!!!!!!!'
				});
			} else {
				const updatedTodoItem = await isupdateTodoItem.update({
					content: req.body.content || todo.content,
					complete: req.body.complete || todo.complete
				});

				return res.status(200).send({
					message: 'TodoItem Updated Successfully',
					updatedTodoItem
				});
			}
		} catch (e) {
			return res.status(400).send(e.message);
		}
	},

	async destroySingleTodoItem(req, res) {
		try {
			const destroyableTodoItem = await TodoItem.findOne({
				where: {
					id: req.params.todoItemId,
					todoId: req.params.todoId
				}
			});

			if (!destroyableTodoItem) {
				return res.status(404).send({
					message: 'Todo Not Found!!!!!!!!!!!!'
				});
			} else {
				const destroyedTodoItem = await destroyableTodoItem.destroy();

				return res.status(200).send({
					destroyedTodoItem,
					message: 'Todo Deleted Succefulyy'
				});
			}
		} catch (e) {
			return res.status(400).send(e.message);
		}
	}
};
