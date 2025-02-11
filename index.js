import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import multer from "multer";


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Configure Multer storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure this folder exists (create it if needed)
    cb(null, join(__dirname, "public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create the multer instance with the storage config
const upload = multer({ storage });
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// In-memory array to store posts
let posts = [];

// Home page: View all posts
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

// Route to show form for creating a new post
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// Handle new post creation with image upload
app.post("/posts", upload.single("image"), (req, res, next) => {
  try {
    const { title, content } = req.body;
    const image = req.file ? "/uploads/" + req.file.filename : "";
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    posts.push({ id, title, content, image, createdAt: new Date() });
    console.log("Post created successfully:", id);
    res.redirect("/");
  } catch (error) {
    console.error("Error creating post:", error);
    next(error); // Pass error to Express error handler
  }
});

// Show form to edit a post
app.get("/posts/:id/edit", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.render("edit", { post });
  } else {
    res.sendStatus(404);
  }
});

// Handle post update
app.post("/posts/:id/edit", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    // Update post properties based on the form submission
    post.title = req.body.title;
    post.content = req.body.content;
    // Optionally update the image URL if provided (or handle file upload if desired)
    post.image = req.body.image;
    res.redirect("/");
  } else {
    res.sendStatus(404);
  }
});

// Handle post deletion
app.post("/posts/:id/delete", (req, res) => {
  const postId = parseInt(req.params.id);
  // Filter out the post to be deleted from the posts array
  posts = posts.filter(p => p.id !== postId);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});