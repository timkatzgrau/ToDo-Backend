module.exports = {
	port: process.env.PORT || 3000,
	db: {
		database: process.env.DB_NAME || 'todo',
		user: process.env.DB_USER || 'todo',
		password: process.env.DB_PASS || 'todo',
 		options: {
 			dialect: process.env.DIALECT || 'mysql',
 			host: process.env.HOST || 'localhost',
		}
	}
}