const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    logs: [String],
  },
  {
    timestamps: true,
  }
);

const LogModel = mongoose.model("Log", logSchema);

module.exports = LogModel;
