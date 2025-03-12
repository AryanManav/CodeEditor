import React, { useState, useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Load blog posts from local storage
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setPosts(storedPosts);
  }, []);

  // Add a new post
  const addPost = () => {
    if (title.trim() === "" || content.trim() === "") return;

    const newPost = { title, content, date: new Date().toLocaleDateString() };
    const updatedPosts = [newPost, ...posts];
    
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

    setTitle("");
    setContent("");
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Developer Blogs</h1>
      <p className="blog-description">
        Share your thoughts, insights, and experiences on coding and technology.
      </p>

      {/* Blog Form */}
      <div className="blog-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button style={{color: "#2c2f33"}} onClick={addPost}>Publish</button>
      </div>

      {/* Blog Posts */}
      <div className="blog-list">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="blog-post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <span className="blog-date">{post.date}</span>
            </div>
          ))
        ) : (
          <p className="no-posts">No blogs yet. Start writing!</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
