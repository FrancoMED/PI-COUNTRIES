const { Activity } = require('../db');

const postActivity = async (req, res, next) => {
	try {
		const { name, difficulty, duration, season } = req.body;
		const act = await Activity.create({
			name,
			difficulty,
			duration,
			season
		});

		console.log('Actividad creada ', act.dataValues);

		res.json(act);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	postActivity
};
