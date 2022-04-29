const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
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
    // Column #2 - Category Name //
    category_name: {
      // Data Type - set this to string
      type: DataTypes.STRING,
      // Does NOT allow null
      allowNull: false,
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
