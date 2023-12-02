import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
   {
      name: String,
      color: String,
   },
   {
      timestamps: true,
   }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;
