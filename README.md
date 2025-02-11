# MyBlog

MyBlog is a simple, responsive blog application built using Node.js, Express, EJS, and Bootstrap. It allows users to create, view, edit, and delete blog posts, supports image uploads via Multer, and displays the creation date for each post. This project follows a clean two‑column layout with a main content area and a sidebar.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Publishing on GitHub](#publishing-on-github)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Additional Instructions](#additional-instructions)

## Features

- **Post Creation:**
  Create new posts with a title, content, and an optional image upload.
- **Post Viewing:**
  View all posts in a two‑column layout; the left column shows blog posts while the right sidebar displays additional information (e.g., an About section or recent posts).
- **Post Editing & Deletion:**
  Easily edit or delete existing posts.
- **Image Uploads:**
  Upload images using Multer. Images are displayed with fixed dimensions using CSS (`object-fit: cover`) for a uniform appearance.
- **Creation Date Display:**
  Each post shows its creation date in a human‑readable format.
- **Responsive Design:**
  The application uses Bootstrap to ensure a modern, responsive interface on desktop and mobile devices.

## Tech Stack

- **Backend:** Node.js, Express
- **Templating Engine:** EJS
- **Frontend:** HTML, CSS, Bootstrap
- **File Uploads:** Multer

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/MyBlog.git
   ```
2.	**Navigate to the Project Directory:**
```bash
cd MyBlog
```

3. **Install Dependencies:**
```bash
npm install
```
4. **Create the Uploads Directory:**
Ensure that the uploads directory exists inside the public folder. You can create it manually or run:
```bash
mkdir -p public/uploads
```

4. **Usage**
	1.	Start the Application:
	•	To run normally:
```bash
npm start
```
•	For development with automatic restarts (using nodemon):
```bash
nodemon index.js
```
	2.	Open the Application:
In your web browser, navigate to http://localhost:3000.
	3.	Create, Edit, or Delete Posts:
	•	Use the Create New Post button to add a new post (fill in title, content, and optionally upload an image).
	•	Each post displays options to Edit or Delete it on the home page.

5. **Project Structure**
MyBlog/
├── index.js           # Main application file
├── package.json
├── public/            # Static files (images, CSS, etc.)
│   ├── css/           # Custom styles (e.g., style.css)
│   └── uploads/       # Uploaded images
└── views/             # EJS templates
    ├── partials/
    │   ├── header.ejs
    │   └── footer.ejs
    ├── index.ejs      # Main page displaying posts
    ├── new.ejs        # Form for creating posts
    └── edit.ejs       # Form for editing posts
