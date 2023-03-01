const { v4: uuidv4 } = require('uuid');
const List = require('../models/list.js');
const headers = require('../middlewares/headers');

exports.createItem = (req, res, next) => {
    const { name, listId } = req.body;
    const _id = uuidv4();
    const item = {
        _id,
        name
    };
    List.findOneAndUpdate(
        { _id: listId }, { $push: { items: item } },)
        .then((response) => {
            res.status(response ? 201 : 404);
            res.set(headers.createHeaders());
            res.json({ message: response ? 'Item added successfully!' : 'List not found!', });
        })
        .catch(err => console.log('err', err));
};

exports.deleteItem = async (req, res, next) => {
    const { listId, itemId } = req.body;
    const query = await List.find({ _id: listId });
    foundItem = (query[0].items.some(({ _id }) => _id === itemId));
    if (foundItem) {
        List.findOneAndUpdate(
            { _id: listId }, { $pull: { items: { _id: itemId } } },)
            .then(() => {
                res.status(200)
                res.set(headers.createHeaders());
                res.json({ message: 'Item deleted successfully!', });
            })
            .catch(err => console.log('err', err));
    } else {
        res.status(404)
        res.set(headers.createHeaders());
        res.json({ message: 'No item found!', });
    }
};
