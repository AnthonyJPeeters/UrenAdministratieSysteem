'use strict';
const Product = require('../../models').Product;
const httpStatus = require( 'http-status' );

function load(req, res, next, id) {
  Product.findById(id)
    .then((product) => {
      req.product = product;
      return next();
    })
    .catch(e => next(e));
}


function get(req, res) {
  if ( req.product === null ) {
    return res.status( httpStatus.NOT_FOUND ).json();
  }
  else {
    return res.status( httpStatus.OK ).json( req.product );
  }
}

function create(req, res, next) {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    gender: req.body.gender,
    price: req.body.price,
    sizes: req.body.sizes,
    colors: req.body.colors,
    imageUrl: req.body.imageUrl
  });

  product.save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e));
}


function update(req, res, next) {
  // TODO: Check if product is found.
  const product = req.product;
  product.name = req.body.name;
  product.category = req.body.category;
  product.gender = req.body.gender;
  product.price = req.body.price;
  product.sizes = req.body.sizes;
  product.colors = req.body.colors;
  product.imageUrl = req.body.imageUrl;
  product.save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e));
}


module.exports = { load, get, create, update };
