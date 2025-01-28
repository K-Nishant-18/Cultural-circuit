import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ blogs }) => {
  const { id } = useParams();  // Get the blog id from the URL
  const blog = blogs.find((b) => b.id === parseInt(id));  // Find the blog using the id

  if (!blog) {
    return <p>Blog not found</p>;  // If the blog is not found, display an error message
  }

  return (
    <div style={styles.blogPost}>
      <img src={blog.image} alt={blog.title} style={styles.blogImage} />
      <h1 style={styles.blogTitle}>{blog.title}</h1>
      <div style={styles.blogMeta}>
        <span style={styles.author}>By {blog.author}</span> |
        <span style={styles.date}>{blog.date}</span>
      </div>
      <p style={styles.blogContent}>{blog.content}</p>
    </div>
  );
};

const styles = {
  blogPost: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
  },
  blogImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  blogTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  blogMeta: {
    fontSize: '14px',
    color: '#999',
    marginTop: '10px',
  },
  author: {
    color: '#007bff',
  },
  date: {
    color: '#555',
  },
  blogContent: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
    marginTop: '20px',
  },
};

export default BlogPost;
