const express = require('express');
const router = express.Router();

const Message =  require('../../models/Message');

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