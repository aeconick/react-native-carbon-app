const { model, Schema, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    category: { type: String },
    type: { type: String },
    emissions: {
        type: Number,
        min: [0, 'Year must be between a positive number'],
    },
    title: { type: String },
    created: { type: Date },
    _ownerId: { type: ObjectId, ref: 'User' },
});

const Item = model('Item', itemSchema);

module.exports = Item;