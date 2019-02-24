const Authentication = require('./controllers/Authentication')
const ToDosController = require('./controllers/ToDosController')
const CreateController = require('./controllers/CreateController')
const DeleteController = require('./controllers/DeleteController')
const EditController = require('./controllers/EditController')

module.exports = (app) => {
	app.post('/register',
	Authentication.register)

	app.post('/login',
	Authentication.login)

	app.post('/todos',
	ToDosController.getAllToDos)

	app.post('/create',
	CreateController.createToDo)

	app.post('/delete',
	DeleteController.deleteToDo)

	app.post('/edit',
	EditController.editToDo)
}
