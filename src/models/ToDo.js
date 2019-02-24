module.exports = (sequelize, DataTypes) =>
	sequelize.define('ToDo', {
		description: {
			type: DataTypes.TEXT,
		},
		user_ID: {
			type: DataTypes.INTEGER,
		},
	})
