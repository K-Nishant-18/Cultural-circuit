import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div style={styles.blogList}>
      {blogs.map((blog) => (
        <div key={blog.id} style={styles.blogCard}>
          <img src={blog.image} alt={blog.title} style={styles.blogImage} />
          <h3 style={styles.blogTitle}>
            <Link to={`/blog/${blog.id}`} style={styles.blogLink}>{blog.title}</Link>
          </h3>
          <p style={styles.blogSummary}>{blog.summary}</p>
          <div style={styles.blogMeta}>
            <span style={styles.author}>By {blog.author}</span> |
            <span style={styles.date}>{blog.date}</span>
          </div>
          <Link to={`/blog/${blog.id}`} style={styles.readMore}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  blogList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '20px',
  },
  blogCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  blogCardHover: {
    transform: 'translateY(-10px)',
  },
  blogImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  blogTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  blogSummary: {
    fontSize: '16px',
    color: '#666',
  },
  blogMeta: {
    fontSize: '14px',
    color: '#999',
    marginTop: '10px',
  },
  readMore: {
    color: '#007bff',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '10px',
  },
  blogLink: {
    textDecoration: 'none',
    color: '#333',
  },
};

export default BlogList;
