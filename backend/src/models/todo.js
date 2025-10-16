import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    // status: { type: String, enum: [] },
    dueDate: { type: Date },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
