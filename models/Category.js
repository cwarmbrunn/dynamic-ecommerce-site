const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // Columns Go Here! //

    // Column #1 - ID //
    // Set the column name to ID
    id: {
      // Type - Set this to integer
      type: DataTypes.INTEGER,
      // Does NOT allow null variables
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true,
    },
  },

  // Sequelize //
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
