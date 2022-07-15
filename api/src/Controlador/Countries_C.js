const axios = require('axios');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const preload = async (req, res, next) => {
	try {
		//pedido a la api:
		const countries = await axios.get('https://restcountries.com/v3/all');
		if (countries) {
			let aux = countries.data?.map((c) => {
				return {
					name: c.name.common,
					id: c.cca3,
					flag: c.flags[1],
					region: c.region,
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
			// let prueba = aux[0];
			// console.log(aux);
			// res.status(200).json(aux);
			// return aux;
		} else {
			res.status(404).json({ message: 'Error en la funcion preload' });
		}
	} catch (error) {
		next(error);
	}
};

const getAll = async (req, res, next) => {
	let allCount = await Country.findAll({ include: Activity });
	try {
		if (allCount.length) {
			res.json(allCount);
		}
	} catch (error) {
		next(error);
	}
};

const getParams = async (req, res, next) => {
	const { id } = req.params;
	try {
		if (id) {
			const idCountry = await Country.findByPk(id.toUpperCase(), {
				include: Activity
			});
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

module.exports = {
	preload,
	getAll,
	getParams,
	getQuery
};
