module.exports = (sequelize, DataTypes) =>
	sequelize.define('user', {
		username: {
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING
	},{
    timestamps: false
  })
