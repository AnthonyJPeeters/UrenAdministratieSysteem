const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const RegistrationSchema = new Schema({
  uuid: { type: String, required: true },
  workedHours: { type: String, required: true  },
  date: { type: String, required: true  },
  description: { type: String, required: true },
});

module.exports = {
  Registration: mongoose.model('Registration', RegistrationSchema)
};