'use strict';
const express = require( 'express' );
const timeRegistrationRoutes = require( './timeRegistration.route' );

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/timeregistration', timeRegistrationRoutes);



module.exports = router;
