const { v4: uuidv4 } = require('uuid');
const List = require('../models/list');
const createResponse = require('../middlewares/responseHandlers');
const headers = require('../middlewares/headers');


exports.getLists = (_, res) => {
    List.find()
        .then(lists => createResponse.handleGetLists({ res, lists }))
        .catch(err => createResponse.handleGetLists({ err }))
};

exports.createList = (req, res, next) => {
    const { channels, name } = req.body;
    const _id = uuidv4();
    const list = new List({
        channels,
        _id,
        name
    });
    list.save()
        .then(listSaved => {
            res.set(headers.createHeaders());
            res.status(201).json({
                message: 'List created successfully!',
                list: listSaved
            });
        })
};

exports.deleteList = (req, res, next) => {
    const { listId } = req.body;
    List.deleteOne(
        { _id: listId })
        .then(() => {
            res.status(200)
            res.set(headers.createHeaders());
            res.json({ message: 'List deleted successfully!', });
        })
        .catch(err => console.log('err', err));
};