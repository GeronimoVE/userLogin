const { getAll, create, getOne, remove, update } = require('../controllers/emailCode.controllers');
const express = require('express');

const emailCodeRouter = express.Router();

emailCodeRouter.route('/')
    .get(getAll)
    .post(create);

emailCodeRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = emailCodeRouter;