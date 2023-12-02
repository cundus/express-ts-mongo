import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
      name: String,
      phone: String,
      email: String,
      username: String,
      password: String,
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model("User", userSchema);
export default User;
