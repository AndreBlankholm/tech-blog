// import all models
const Blog = require('./Blog.js');



//// model associations
User.hasMany(Blog, {
    foreignKey: 'user_id',
  });



  // model exports
module.exports = {
   Blog,
    Category,
    User,
    Comment,
  };