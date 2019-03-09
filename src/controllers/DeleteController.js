const {todo} = require('../models')

module.exports = {
	async deleteToDo(req, res) {
		try {
			const current = await todo.destroy({
			    where: {
			        id: req.body.id
			    }
			})
			res.send("success")
		} catch (err) {
			res.status(500).send({
				error: 'An error occurred deleting the todo.  Try again.'
			})
		}
	}

}
