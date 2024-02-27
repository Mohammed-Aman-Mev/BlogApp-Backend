const getBlog = (req, res) => {
  res.send("Single Blogs");
};

const getBlogs = (req, res) => {
  res.send("All Blogs");
};

const addBlog = (req, res) => {
  res.send("Blog added");
};

const updateBlog = (req, res) => {
  res.send("Blog Updated");
};

const deleteBlog = (req, res) => {
  res.send("Blog Deleted");
};

export { getBlog, getBlogs, addBlog, updateBlog, deleteBlog };
