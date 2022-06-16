const router = require('express').Router();

const userRoutes = require('./user-routes');
//const postRoutes = require('./post-routes');        routes use/ replace
//const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
//router.use('/posts', postRoutes);   routes use/ replace
//router.use('/comments', commentRoutes);






module.exports = router;