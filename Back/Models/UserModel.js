import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto"
const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    matricule: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phonenum: {
      type: String,
      required: false,
    },
    profile: {
      type: String,
      required: false,      
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    },
    pays: {
      type: String,
      required: false,      
    },
    etat: {
      type: String,
      required: false,
      default: 'active'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

  },
  {
    timestamps: true,
  }
);

// Login
userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Register
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.getResetPasswordToken = async function () {

  // generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // generate hash token and add to db
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
}


const User = mongoose.model("User", userSchema);


export default User;
