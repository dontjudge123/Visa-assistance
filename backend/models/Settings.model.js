// models/Settings.model.js
const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  registrationOpen: { type: Boolean, default: true },
  maintenanceMode: { type: Boolean, default: false },
  emailVerificationRequired: { type: Boolean, default: true },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);