import express from "express";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../Controllar/blogs_controllar.js";

const router = express.Router();

//all Blogs

router.get("/", getBlogs);

//Single Blogs

router.get("/:blogId", getBlog);

//Add Blog

router.post("/", addBlog);

//update Blog

router.put("/:blogId", updateBlog);

//delete Blog

router.delete("/:blogId", deleteBlog);

export default router;
