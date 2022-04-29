const User = require('../models/User');

async function index(req, res) {
    try {
        const users = await User.all
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send({error})
    }
}

module.exports = {index}
