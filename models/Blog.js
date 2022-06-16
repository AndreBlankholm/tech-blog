// import sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection.js');


class Blog extends Model {}


Blog.init(  //clean this up
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      product_id: {                  
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'blog',
    }
  );
  


module.exports = Blog;