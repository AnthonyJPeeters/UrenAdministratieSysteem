'use strict';
const invoices = require('../../models').invoices;
const httpStatus = require( 'http-status' );

function getall(req, res,next) {
  const id = req.params.uuid;
  invoices.find({ uuid: id })
      .then(i => res.status(200).send(i))
      .catch(next);
}

function get(req, res,next) {

  const id = req.params._id;

  invoices.find({  _id: id })
      .then(i => res.status(200).send(i))
      .catch(next);
}

function create(req, res, next) {
  var newitem = new invoices(req.body);
  newitem.save()
    .then(savedTime => res.json(savedTime))
    .catch(e => next(e));
}


function update(req, res, next) {
  const id = req.params._id;
  invoices.findOneAndUpdate({_id: id },req.body)
    .then(time => res.status(200).send(req.body))
    .catch(next);
}


module.exports = {getall,  get, create, update };
