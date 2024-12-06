const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    googleId: {
      type: String,
      required: false, // required only for users login with google
    },
    authMethod: {
      type: String,
      enum: ["local", "google", "facebook", "github", "linkedin"],
      default: "local",
      required: true,
    },
    passwordResetToken: {
      type: String,
      default: null,
    },
    accountVerificationToken: {
      type: String,
      default: null,
    },
    accountVerificationExpires: { default: null, type: Date },
    passwordResetToken: {
      type: String,
      default: null,
    },
    accountVerificationToken: {
      type: String,
      default: null,
    },
    accountVerificationExpires: { default: null, type: Date },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profilePicture: {
      type: Object,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    totalEarnngs: {
      type: Number,
      default: 0,
    },
    nextEarningDate: {
      type: Date,
      default: () => {
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getMonth() + 1,
          1
        );
      },
    },
    Plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
      },
    ],
    hasSelectedPlan: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },

    // user relationships
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);