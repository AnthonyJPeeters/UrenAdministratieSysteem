const express = require('express');
const expressJwt = require( 'express-jwt' );
const config = require( '../../utils/config' );
const timeRegistrationCtlr = require('../controllers/timeRegistration.controller');

const router = express.Router();


router.route('/:uuid/:date')
  .get(timeRegistrationCtlr.get)


router.route('/:uuid')
  .post(timeRegistrationCtlr.create)
  .get(timeRegistrationCtlr.getAll)
  .put(timeRegistrationCtlr.update)
  



module.exports = router;
