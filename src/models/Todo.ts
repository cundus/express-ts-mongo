import mongoose from "mongoose";
import Category from "./Category";

const TodoSchema = new mongoose.Schema(
   {
      isChecked: Boolean,
      description: String,
      category: {
         type: Category,
         default: () => ({}),
      },
   },
   {
      timestamps: true,
   }
);

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
