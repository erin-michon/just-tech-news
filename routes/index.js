const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//If we make a request to an api endpoin that doesn't exist, this will provide an error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;