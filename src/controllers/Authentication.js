const {User} = require('../models')

module.exports = {
	async register(req, res){
		try{
	  		const user = await User.create(req.body)
	  		res.send(user.toJSON())
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
	  		const user = await User.findOne({
	  			where: {
	  				username: username
	  			}
	  		})
	  		if (!user){
	  			return res.status(403).send({
	  				error: 'Invalid login information.'
	  			})
	  		}

	  		const isPasswordValid = password === user.password
	  		if(!isPasswordValid){
	  			return res.status(403).send({
	  				error: 'Invalid login information.'
	  			})
	  		}
	  		res.send(user.toJSON())
		} catch (err){
			res.status(500).send({
				error: "An error occurred."
			})
		}
	}
}