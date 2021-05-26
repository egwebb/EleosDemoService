const express = require('express');
const router = express.Router();

//Loads Model
const Load = require('../../models/Loads');

// @route GET api/loads
// @desc Gets all loads
router.get('/', (req, res) => {
    Load.find()
        .then(loads => res.json(loads))
});

//@route POST api/loads
//@desc Inserts a load into the database
router.post('/', (req, res) => {
    const newLoad = new Load({
        id: req.body.id,
        display_identifier: req.body.display_identifier,
        sort: req.body.sort,
        order_number: req.body.order_number,
        load_status: req.body.load_status,
        load_status_label: req.body.load_status_label,
        active: req.body.active,
        current: req.body.current
    });

    newLoad.save().then(load => res.json(load));
})

//@route DELETE api/loads/:id
//@desc Deletes the load with the id given in the path from the database
router.delete('/:id', (req, res) => {
    Load.findById(req.params.id)
        .then(load => load.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;