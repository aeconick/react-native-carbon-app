const Item = require('../models/Item');


async function getAll(query) {
    if (query) {
        const userId = query.split('=')[1].slice(1, -1);
        return Item.find({ _ownerId: userId });
    }
    return Item.find({});
}

async function create(item) {
    const result = new Item({
        category: item.category,
        type: item.type,
        emissions: item.emissions,
        title: item.title,
        created: item.created,
        _ownerId: item._ownerId
    });

    
    await result.save();

    return result;
}

async function getById(id) {
    return Item.findById(id);
}

async function updateById(existing, item) {
    existing.category = item.category;
    existing.type = item.type;
    existing.emissions = item.emissions;
    existing.title = item.title;
    existing.created = item.created;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    return await Item.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    create,
    getById,
    updateById,
    deleteById
};