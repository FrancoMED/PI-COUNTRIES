const { Activity, Country } = require('../db');

const postActivity = async (req, res, next) => {
	try {
		const { name, difficulty, duration, season, countryId } = req.body;
		const newActivity = await Activity.create({
			name,
			duration,
			difficulty,
			season
		});

		console.log('Actividad creada ', newActivity.dataValues);
		let arr = [];
		for (let i = 0; i < countryId.length; i++) {
			arr[i] = await newActivity.addCountry(countryId[i]);
		}
		if (newActivity && arr[0]) {
			res.json({ message: 'Se vinculo correctamente', data: newActivity });
		} else {
			res.json({
				message: 'ERROR no se pudieron insertar los datos correctamente'
			});
		}
	} catch (error) {
		next(error);
	}
};

module.exports = {
	postActivity
};
