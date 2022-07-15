const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'country',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			id: {
				type: DataTypes.STRING(3),
				allowNull: false,
				unique: true,
				primaryKey: true
			},
			flag: {
				type: DataTypes.STRING,
				allowNull: false
			},
			region: {
				type: ENUM,
				values: [
					'Americas',
					'Africa',
					'Asia',
					'Oceania',
					'Europe',
					'Antarctic'
				],
				allowNull: false
			},
			capital: {
				type: DataTypes.STRING,
				allowNull: false
			},
			subregion: {
				type: DataTypes.STRING
			},
			area: {
				type: DataTypes.FLOAT
			},
			population: {
				type: DataTypes.INTEGER
			}
		},
		{
			timestamps: false
		}
	);
};
