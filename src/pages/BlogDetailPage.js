import React from "react";
import { useParams } from "react-router-dom";

const BlogDetailPage = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div style={styles.notFound}>Blog not found</div>;
  }

  return (
    <div style={styles.pageContainer}>
      {/* Title Section */}
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>{blog.title}</h1>
      </div>

      {/* Banner Section */}
      <div style={styles.banner}>
        <img src={blog.image} alt={blog.title} style={styles.image} />
        <div style={styles.overlay}></div>
      </div>

      {/* Blog Content */}
      <div style={styles.content}>
        <p style={styles.description}>{blog.description}</p>

        {/* Footer with Author and Date */}
        <div style={styles.footer}>
          <span style={styles.author}>Written by {blog.author}</span>
          <span style={styles.date}>{blog.date || "Unknown Date"}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Poppins', sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "50px",
    paddingBottom: "100px"
  },

  titleContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#333",
    lineHeight: "1.4",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },

  banner: {
    position: "relative",
    width: "100%",
    height: "400px",
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "30px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },

  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "12px",
  },

  content: {
    padding: "30px",
    paddingTop : "100px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "-80px", // Overlay content over image
  },

  description: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "#666",
    textAlign: "justify",
    paddingBottom: "30px",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
    color: "#888",
    marginTop: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "15px",
  },

  author: {
    fontStyle: "italic",
    color: "#555",
  },

  date: {
    color: "#888",
    fontWeight: "600",
  },

  notFound: {
    textAlign: "center",
    padding: "50px",
    fontSize: "1.5rem",
    color: "#e74c3c",
    fontWeight: "bold",
  },
};

export default BlogDetailPage;
