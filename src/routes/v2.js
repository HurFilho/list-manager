const express = require('express');

const router = express.Router();

const apiController = require('../controllers/home');
const listsController = require('../controllers/lists');
const itemsController = require('../controllers/items');

router.get('/', apiController.getHome);

router.get('/lists', listsController.getLists);

router.post('/lists', listsController.createList);

router.delete('/lists', listsController.deleteList);

router.post('/items', itemsController.createItem);

router.delete('/items', itemsController.deleteItem);

module.exports = router;