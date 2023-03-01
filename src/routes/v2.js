const express = require('express');

const router = express.Router();

const apiController = require('../controllers/home');
const listsController = require('../controllers/lists');
const itemsController = require('../controllers/items');

router.get('/', apiController.getHome);

router.get('/lists', listsController.getLists);

router.post('/lists', listsController.createLists);

router.delete('/lists', teamController.deleteLists);

router.post('/items', itemsController.createItems);

router.delete('/items', itemsController.deleteItems);

module.exports = router;