const Sequelize = require('sequelize');

class tables extends Sequelize.Model {}

module.exports = (sequelize) => {
  return tables.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  }, {
    tableName: 'ping',
    timestamps: true,
    underscored: false,
    paranoid: true,
    sequelize,
  });
};
