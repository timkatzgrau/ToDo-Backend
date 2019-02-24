const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express();
const {sequelize} = require('./models')
const config = require('./config/config')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

require('./routes')(app)

sequelize.sync()
	.then(() => {
		app.listen(config.port)
		console.log('success listen on port: ' + config.port)
	})

