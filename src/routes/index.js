const router = require('express').Router();
const userRouter = require('../routes/userRouter');

userRouter(router);

module.exports = router;
