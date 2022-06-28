const axios = require('axios');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getAll = async (req, res, next) => {
	try {
		//pedido a la api:
		const countries = await axios.get('https://restcountries.com/v3/all');
		if (countries) {
			let aux = countries.data?.map((c) => {
				return {
					name: c.name.common,
					id: c.cca3,
					flag: c.flags[0],
					continent: c.continents
						? c.continents[0]
						: 'no pertenece a un continente',
					capital: c.capital ? c.capital.join(', ') : 'no tiene una capital',
					subregion: c.subregion ? c.subregion : 'no tiene subregion',
					area: c.area,
					population: c.population
				};
			});
			const allCountries = await Country.findAll({ include: Activity });
			if (!allCountries.length) {
				Country.bulkCreate(aux);
			}
			// res.json(allCountries);
		} else {
			res.status(404).json({ message: 'Error en la funcion getAll' });
		}
	} catch (error) {
		next(error);
	}
};

const getParams = async (req, res, next) => {
	const { id } = req.params;
	try {
		if (id) {
			const idCountry = await Country.findByPk(id.toUpperCase());
			// console.log(idCountry.dataValues);
			if (idCountry) {
				res.json(idCountry);
			} else {
				res.status(404).json({ message: 'No se encontro el ID' });
			}
		}
	} catch (error) {
		next(error);
	}
};

const getQuery = async (req, res, next) => {
	const { name } = req.query;
	console.log(name);
	try {
		if (name.trim() !== '') {
			const allCountries = await Country.findAll({
				where: {
					name: {
						[Op.iLike]: `%${name.trim()}%`
					}
				}
			});
			// console.log(allCountries[0].dataValues);
			if (allCountries.length) {
				res.json(allCountries);
			} else {
				res.send('No se encontro el nombre del pais');
			}
		} else {
			res.send('Escribir un nombre');
		}
	} catch (error) {
		next(error);
	}
};

module.exports = { getAll, getParams, getQuery };
