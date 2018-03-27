'use strict';
const express = require( 'express' );
const invoiceRoutes = require( './invoice.route' );

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/invoice', invoiceRoutes);



module.exports = router;
