const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Database/carambar.db'
  });

const JokeSchema = sequelize.define('Joke', {
  joke_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: DataTypes.STRING,
  answer: DataTypes.STRING
}, {
  timestamps: false
});

module.exports = JokeSchema;