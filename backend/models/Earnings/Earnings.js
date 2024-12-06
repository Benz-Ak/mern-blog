const mongoose = require("mongoose");

const earningsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    amount: {
      type: Number,
      required: true,
    },
    calculateOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Earnings = mongoose.model("Earning", earningsSchema);