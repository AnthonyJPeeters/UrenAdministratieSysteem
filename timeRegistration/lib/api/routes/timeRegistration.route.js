const express = require('express');
const expressJwt = require( 'express-jwt' );
const config = require( '../../utils/config' );
const timeRegistrationCtlr = require('../controllers/timeRegistration.controller');

const router = express.Router();


router.route('/:username/:datum')

  .get(timeRegistrationCtlr.get)
  .put(timeRegistrationCtlr.update)
  .delete(timeRegistrationCtlr.remove);

//router.param('productId', productCtrl.load);

module.exports = router;
