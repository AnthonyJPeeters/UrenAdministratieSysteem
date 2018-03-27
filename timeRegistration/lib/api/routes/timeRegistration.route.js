const express = require('express');
const expressJwt = require( 'express-jwt' );
const config = require( '../../utils/config' );
const timeRegistrationCtlr = require('../controllers/timeRegistration.controller');

const router = express.Router();


router.route('/:uuid/:date')
  .get(timeRegistrationCtlr.get)
  .put(timeRegistrationCtlr.update);

router.route('/')
  .post(timeRegistrationCtlr.create);



module.exports = router;
