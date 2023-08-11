require('dotenv').config();
const { Sequelize } = require('sequelize');
const favoriteModel = require('./models/Favorite');
const userModel = require('./models/User');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   // `${DB_USER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,  
   DB_DEPLOY,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
userModel(sequelize)
favoriteModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo! muchos a muchos
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' }); // Favorites pertenece a muchos user a través de user_favorite (tabla intermedia)

module.exports = {
   Favorite,
   User,
   conn: sequelize,
};
