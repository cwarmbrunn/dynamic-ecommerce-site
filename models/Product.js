// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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

    // Column #2 - Product Name //
    product_name: {
      // Data Type - Set this to string
      type: DataTypes.STRING,
      // Does NOT allow null values
      allowNull: false,
    },

    // Column #3 - Price //
    price: {
      // Data Type - Set this to decimal
      type: DataTypes.DECIMAL,
      // Does NOT allow null values
      allowNull: false,
      // Validates that the value is a decimal
      validate: {
        isDecimal: true,
      },
    },

    // Column #4 - Stock //
    stock: {
      // Data Type - Set this to integer
      type: DataTypes.INTEGER,
      // Does NOT allow null values
      allowNull: false,
      // Sets default value to 10
      defaultValue: 10,
      // Validates that the value is numeric
      validate: {
        isNumeric: true,
      },
    },

    // Columns #5 - Category ID //
    category_id: {
      // Data Type - Set this to integer
      type: DataTypes.INTEGER,
      // References the category model's id
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
