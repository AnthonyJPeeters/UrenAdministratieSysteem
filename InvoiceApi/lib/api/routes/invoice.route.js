const express = require('express');
const expressJwt = require( 'express-jwt' );
const config = require( '../../utils/config' );
const invoicectrl = require('../controllers/invoice.controller');

const router = express.Router();

router.route('/')
  .post(invoicectrl.create);

router.route('/:uuid')
  .get(invoicectrl.getall);

router.route('/:d/:_id')
  .get(invoicectrl.get)
  .put(invoicectrl.update);

module.exports = router;
