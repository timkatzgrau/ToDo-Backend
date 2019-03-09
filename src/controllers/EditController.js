const {todo} = require('../models')

module.exports = {
	async editToDo(req, res) {
		try {
			const current = await todo.update(
				{description: req.body.description},
				{ where: { id: req.body.id }}
			)
			res.send(current)
		} catch (err) {
			res.status(500).send({
				error: 'An error occurred editing the todo.  Try again.'
			})
		}
	}

}
