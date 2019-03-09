module.exports = (sequelize, DataTypes) =>
	sequelize.define('todo', {
		description: {
			type: DataTypes.TEXT,
		},
		user_id: {
			type: DataTypes.INTEGER,
		},
	},{
    timestamps: false
  })
