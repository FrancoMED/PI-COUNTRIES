const { DataTypes, ENUM } = require('sequelize');

module.exports = (Sequelize) => {
	Sequelize.define(
		'activity',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				unique: true
			},
			difficulty: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 5
				}
			},
			duration: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 24
				}
			},
			season: {
				type: ENUM,
				values: ['Verano', 'Otoño', 'Invierno', 'Primavera']
			}
		},
		{
			timestamps: false
		}
	);
};
