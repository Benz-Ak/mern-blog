const mongoose = require("mongoose");

const profanityFilterSchema = mongoose.Schema({
  bannedWords: [String],
});

module.exports = new mongoose.model("ProfanityFilter", profanityFilterSchema);
