# 📝 Next.js Exercise: Build a Simple Blog Website

## Objective:
Create a **simple blog** using **Next.js** with the following pages:
- Home
- About
- Posts list (all posts)
- Single Post page (view individual blog post)

---

## Requirements:

### 1. Setup:
- Create a new Next.js project:
  ```bash
  npx create-next-app@latest simple-blog
  ```
- Clean up default files to start with a fresh project.

---

### 2. Pages:

| Page | Path | What to Show |
|:-----|:-----|:-------------|
| Home | `/` | Welcome text and a brief description of the blog |
| About | `/about` | Information about the blog author |
| Posts List | `/posts` | List of all blog posts with their title and a short excerpt |
| Single Post | `/posts/[id]` | Full details of a blog post |


### 3. Navigation:
- Create a **Navbar** component that links to:
    - Home (`/`)
    - About (`/about`)
    - Posts (`/posts`)

Use Next.js `<Link>` for navigation between pages.



### 7. Bonus (Optional):
✅ Add basic **Tailwind CSS styling** to make it look cleaner.
✅ Add a **Footer** that shows something like: "© 2025 My Simple Blog".

