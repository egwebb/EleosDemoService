const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../../models/User');

router.get('/:token', (req, res) => {
    jwtDecode = jwt.decode(req.params.token);
    //jwtName = jwtDecode.full_name;
    User.findOne({ full_name: jwtDecode.full_name })
        .then((user) => {
            user.api_token = jwt.sign({ "username": user.username, "full_name": user.full_name }, 'secret');
            res.json(user);
        }).catch(res.status(401));
})

module.exports = router;

/*token => User.updateOne({ full_name: user.full_name}, { api_token: token}, user => res.json(user))*/

/*user.api_token = jwt.sign({ "username": user.username, "full_name": user.full_name }, 'secret'), (user) => res.json(user)*/