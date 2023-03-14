const { getAll, create, getOne, remove, update, verifyEmail, login, getLoggedUser } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT, getAll)     //.get(getAll)

    .post(create);

userRouter.route('/verify_email/:code') // Queda: users/verify/:code
    .get(verifyEmail);

userRouter.route('/login')
    .post(login)

userRouter.route('/me')
    .get(verifyJWT, getLoggedUser);
 
userRouter.route('/:id') 
    .get(verifyJWT,  getOne) //    .get(getOne)

    .delete(verifyJWT, remove)     //.delete(remove)
    .put(verifyJWT,  update); //     .put(update);

module.exports = userRouter;