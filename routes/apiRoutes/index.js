const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes.js'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;