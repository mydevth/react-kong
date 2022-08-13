// schema - title, content, author, slug(url) , time stamp
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: {},
      require: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// const Blogs = mongoose.model("Blogs", blogSchema);
// module.exports = Blogs;

module.exports = mongoose.model("Blogs", blogSchema);
