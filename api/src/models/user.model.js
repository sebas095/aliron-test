const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const SALT_WORK_FACTOR = 10;

const userStatus = {
  values: ["ACTIVE", "INACTIVE"],
  message: "{VALUE} is not a valid status",
};

const validRoles = {
  values: ["ADMIN_ROLE", "PLAYER_ROLE"],
  message: "{VALUE} no es un rol",
};

const UserSchema = new Schema(
  {
    firstname: { type: String, required: [true, "Firstname is required"] },
    lastname: { type: String, required: [true, "Lastname is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
    status: { type: String, default: "ACTIVE", enum: userStatus },
    role: { type: String, default: "PLAYER_ROLE", enum: validRoles },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return err;
  }
};

// Encrypt the password
UserSchema.pre("save", async function (next) {
  const user = this;
  try {
    if (this.isModified("password") || this.isNew) {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
    }

    return next();
  } catch {
    return next(err);
  }
});

UserSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });
module.exports = mongoose.model("User", UserSchema);
