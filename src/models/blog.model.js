import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    blog: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const blogModel = mongoose.model("blogModel", blogSchema);
