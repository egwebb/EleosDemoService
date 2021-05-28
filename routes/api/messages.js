const express = require('express');
const router = express.Router();

const Message =  require('../../models/Message');
const User = require('../../models/User');

// var AuthMessage = function(token){
//     return new Promise(function(resolve, reject){
//         User.findOne({username: jwt_decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]})
//             .then(resolve("Authorized"))
//             .catch(reject("Unauthorized"));

//     });
// }

router.put('/:handle', (req, res) => {
    const newMessage = new Message ({
        direction: req.body.direction,
        username: req.body.username,
        message_type: req.body.message_type,
        composed_at: req.body.composed_at,
        platform_received_at: req.body.platform_received_at
    });
    
    newMessage.save().then(res.json(req.params.handle));
})

module.exports = router;