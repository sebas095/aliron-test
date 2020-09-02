const mongoose = require("mongoose");
const { Schema } = mongoose;

const StageSchema = new Schema(
  {
    playerOne: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    playerTwo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tournamentId: {
      type: Schema.Types.ObjectId,
      ref: "Tournament",
    },
    round: {
      type: Number,
      required: true,
      default: 1,
    },
    score: [{ type: Number }],
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Stage", StageSchema);
