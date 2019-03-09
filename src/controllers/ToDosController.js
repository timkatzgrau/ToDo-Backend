const {todo} = require('../models')

module.exports = {
	async getAllToDos(req, res) {
		try {
			const current = await todo.findAll({
				where: {
					user_id: req.body.id
				}
			})

			res.send(current)
		} catch (err) {
			res.status(500).send({
				error: 'An error occurred fetching the todos.  Try again.'
			})
		}
	},

}
