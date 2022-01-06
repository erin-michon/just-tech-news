const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

//If we make a request to an api endpoin that doesn't exist, this will provide an error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;