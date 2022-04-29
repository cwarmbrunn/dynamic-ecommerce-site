const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // Columns Go Here! //

    // Column #1 - ID //
    id: {
      // Data Type - Set this to integer
      type: DataTypes.INTEGER,
      // Does NOT allow null
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true,
    },

    // Column #2 - Tag Name //
    tag_name: {
      // Data Type - Set this to string
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
