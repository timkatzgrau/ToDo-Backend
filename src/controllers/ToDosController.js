const {ToDo} = require('../models')

module.exports = {
	async getAllToDos(req, res) {
		try {
			const todos = await ToDo.findAll({
				where: {
					user_ID: req.body.id
				}
			})

			res.send(todos)
		} catch (err) {
			res.status(500).send({
				error: 'An error occurred fetching the todos.  Try again.'
			})
		}
	},

}