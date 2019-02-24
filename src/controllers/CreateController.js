const {ToDo} = require('../models')

module.exports = {
	async createToDo(req, res) {
		try {
			const todo = await ToDo.create(req.body)
			res.send(todo)
		} catch (err) {
			res.status(500).send({
				error: 'An error occurred creating the todo.  Try again.'
			})
		}
	}

}