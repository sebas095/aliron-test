const mongoose = require("mongoose");
const { Schema } = mongoose;

const TournamentSchema = new Schema(
  {
    stages: [{ type: Schema.Types.ObjectId }],
    playersNumber: { type: Number, required: true, default: 8 },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

// Calculate stages number in a tournament
// Players number must be a power of 2
TournamentSchema.virtual("stagesNumber").get(function () {
  return Math.log2(this.playersNumber) - 1;
});

TournamentSchema.virtual("stagesName").get(function () {
  switch (this.stagesNumber) {
    case 32:
      return "Dieciseisavos De Final";
    case 16:
      return "Octavos De Final";
    case 8:
      return "Cuartos De Final";
    case 4:
      return "Semifinal";
    case 2:
      return "Final";
    default:
      return "";
  }
});

module.exports = mongoose.model("Tournament", TournamentSchema);
