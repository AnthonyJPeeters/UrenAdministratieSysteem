'use strict';
const timeRegistration = require('../../models').timeRegistration;
const httpStatus = require( 'http-status' );



function get(req, res,next) {
  const userId = req.params.uuid;
  const date = req.params.date;
  timeRegistration.find({ uuid: userId, date: date })
      .then(i => res.status(200).send(i))
      .catch(next);
}

function create(req, res, next) {
  var newitem = new timeRegistration(req.body);
  newitem.save()
    .then(savedTime => res.json(savedTime))
    .catch(e => next(e));
}


function update(req, res, next) {

  const userId = req.params.uuid;
  const date = req.params.date;
    timeRegistration.findOneAndUpdate({uuid : userId, date: date },req.body)
    .then(time => res.status(200).send(req.body))
    .catch(next);
}


module.exports = {  get, create, update };
