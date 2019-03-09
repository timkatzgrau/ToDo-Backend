const {todo} = require('../models')

module.exports = {
	async createToDo(req, res) {
		try {
			const current = await todo.create(req.body)
			res.send(current)
		} catch (err) {
			res.status(500).send({
				error: 'An error occurred creating the todo.  Try again.'
			})
		}
	}

}
