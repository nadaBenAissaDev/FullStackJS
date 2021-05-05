const router = require('express').Router();
let scrap = require('../../models/scrap');






router.route('/scrap').get((req, res) => {
    scrap.find()
    .then(scrap => res.json(scrap))
    .catch(err => res.status(400).json('Error: ' + err));
  
  });
  

  //par 1 
  router.route('/:id').get((req, res) => {
    scrap.findById(req.params.id)
      .then(scrap => res.json(scrap))
      .catch(err => res.status(400).json('Error: ' + err));
  });




module.exports = router;
