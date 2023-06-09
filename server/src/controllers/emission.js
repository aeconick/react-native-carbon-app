const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/emission');
const errorMapper = require('../util/errorMapper');


router.get('/', async (req, res) => {
    try {
        res.json(await api.getAll(req.query.where));
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

router.post('/', isAuth(), async (req, res) => {
    const item = {
        category: req.body.category,
        type: req.body.type,
        emissions: req.body.emissions,
        title: req.body.title,
        created: req.body.created,
        _ownerId: req.user._id
    };

    try {
        const result = await api.create(item);
        res.json(result);
    } catch (err) {
        console.error(err);
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

router.get('/:id', preload(api), (req, res) => {
    res.json(res.locals.item);
});

router.put('/:id', preload(api), isOwner(), async (req, res) => {
    try {
        const result = await api.updateById(res.locals.item, req.body);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Request error' });
    }
});

router.delete('/:id', isAuth(),  async (req, res) => {
    const id = req.params.id;

    try {
        const result = await api.deleteById(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: `Item ${id} not found` });
    }
});


module.exports = router;