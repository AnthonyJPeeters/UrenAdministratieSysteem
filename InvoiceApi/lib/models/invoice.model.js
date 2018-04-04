
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const InvoiceSchema = new Schema({
  uuid: { type: String, required: true },
  paid: { type: String, required: true  },
  registerId: [{type: String}],
  totalprice: [{type: Number, required: true }],
  currentWage: { type: Number, required: true },
});

module.exports = {
  invoice: mongoose.model('Invoice', InvoiceSchema)
};