const {ToDo} = require('../models')

module.exports = {
	async editToDo(req, res) {
		try {
			const todo = await ToDo.update(
				{description: req.body.description},
				{ where: { id: req.body.id }}
			)
			res.send(todo)
		} catch (err) {
			res.status(500).send({
				error: 'An error occurred editing the todo.  Try again.'
			})
		}
	}

}