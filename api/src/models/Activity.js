const { DataTypes, ENUM } = require('sequelize');

module.exports = (Sequelize) => {
	Sequelize.define(
		'activity',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				unique: true
			},
			duration: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 24
				}
			},
			difficulty: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 5
				}
			},
			season: {
				type: ENUM,
				values: ['Summer', 'Autumn', 'Winter', 'Spring']
			}
		},
		{
			timestamps: false
		}
	);
};
