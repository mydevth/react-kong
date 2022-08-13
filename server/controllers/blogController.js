//ติดต่อฐานข้อมูล / ดำเนินการกับฐานข้อมูล
const slugify = require("slugify");
const Blogs = require("../models/blogModel");

//บันทึกข้อมูล
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  // validation ข้อมูลว่าง
  switch (true) {
    case !title:
      return res.status(400).json({ error: "กรุณาใส่ชื่อบทความ" });
      break;
    case !content:
      return res.status(400).json({ error: "กรุณาใส่เนื้อหาบทความ" });
      break;
  }
  // บันทึกข้อมูล
  Blogs.create({ title, content, author, slug }, (err, blog) => {
    if (err) {
      res.status(400).json({ error: "ชื่อบทความซ้ำกัน" });
    }
    res.json(blog);
  });
};
