const {user} = require('../models')

module.exports = {
	async register(req, res){
		try{
	  		const newuser = await user.create(req.body)
	  		res.send(newuser.toJSON())
		} catch (err){
			//username exists
			res.status(400).send({
				error: "This username is taken."
			})
		}
	},
	async login(req, res){
		try{
			const {username, password} = req.body
	  		const current = await user.findOne({
	  			where: {
	  				username: username
	  			}
	  		})
	  		if (!current){
	  			return res.status(403).send({
	  				error: 'Invalid login information.'
	  			})
	  		}

	  		const isPasswordValid = password === current.password
	  		if(!isPasswordValid){
	  			return res.status(403).send({
	  				error: 'Invalid login information.'
	  			})
	  		}
	  		res.send(current.toJSON())
		} catch (err){
			res.status(500).send({
				error: "An error occurred."
			})
		}
	}
}
