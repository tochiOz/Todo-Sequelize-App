const Todo = require('./../models').Todo;
const TodoItem = require('./../models').TodoItem;

module.exports = {
	async createTodo(req, res) {
		try {
			const todoTitle = await Todo.create({
				title: req.body.title
			});

			res.status(201).send(todoTitle);
		} catch (err) {
			res.status(400).send(err.message);
		}
	},

	async getSingleTodo(req, res) {
		try {
			const todoCollection = await Todo.find({});

			return res.status(200).send(todoCollection);
		} catch (err) {
			return res.status(400).send(err);
		}
	},

	async listTodoItems(req, res) {
		try {
			const TodoItems = await Todo.findAll({
				include: [
					{
						model: TodoItem,
						as: 'todoItems'
					}
				]
			});

			return res.status(200).send(TodoItems);
		} catch (e) {
			return res.status(400).send(e.message);
		}
	},

	async singleTodoWithContents(req, res) {
		try {
			const singleTodo = await Todo.findOne({
				where: { id: req.params.todoId },

				include: [
					{
						model: TodoItem,
						as: 'todoItems'
					}
				]
			});

			if (!singleTodo)
				return res.status(404).send({
					message: 'Todo Not Found!!!!!!!!!!!!'
				});

			return res.status(200).send(singleTodo);
		} catch (e) {
			return res.status(400).send(e.message);
		}
	},

	async updateSingleTodo(req, res) {
		try {
			const UpdatedableTodo = await Todo.findOne({
				where: { id: req.params.todoId },
				include: [
					{
						model: TodoItem,
						as: 'todoItems'
					}
				]
			});

			if (!UpdatedableTodo) {
				return res.status(404).send({
					message: 'Todo Not Found!!!!!!!!!!!!'
				});
			} else {
				const updatedTodo = await UpdatedableTodo.update({
					title: req.body.title || todo.title
				});

				return res.status(200).send(updatedTodo);
				return updatedTodo;
			}
		} catch (e) {
			return res.status(400).send(e.message);
		}
	},

	async destroySingleTodo(req, res) {
		try {
			const destroyableTdo = await Todo.findOne({
				where: { id: req.params.todoId },
				include: [
					{
						model: TodoItem,
						as: 'todoItems'
					}
				]
			});

			if (!destroyableTdo) {
				return res.status(404).send({
					message: 'Todo Not Found!!!!!!!!!!!!'
				});
			} else {
				const destroyedTodo = await destroyableTdo.destroy();

				return res.status(200).send({
					destroyedTodo,
					message: 'Todo Deleted Succefulyy'
				});
			}
		} catch (e) {
			return res.status(400).send(e.message);
		}
	}
};
