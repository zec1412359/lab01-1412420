'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Team.hasMany(models.User, {
          onDelete: "CASCADE",
          foreignKey: 'team_id'
        });
      },
      getAllTeam: function(doem) {
        return Team.findAll({attributes: ['id', 'name']})
      }
    }
  });
  return Team;
};