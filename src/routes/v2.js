const express = require('express');

const router = express.Router();

const apiController = require('../controllers/home');
const listsController = require('../controllers/lists');
const itemsController = require('../controllers/items');

router.get('/', apiController.getHome);

router.get('/lists', listsController.getLists);

router.post('/lists', listsController.createList);

router.delete('/lists', listsController.deleteList);

router.post('/item', itemsController.createItem);

router.delete('/item', itemsController.deleteItem);

module.exports = router;