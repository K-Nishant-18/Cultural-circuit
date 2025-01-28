import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, description, author, date, image }) => {
  return (
    <div className="blog-wrap">
      <div className="blog-card">
        <div className="blog-image">
          <img src={image} alt={title} />
        </div>

        <div className="blog-content">
          <div className="blog-info">
            <h5 className="blog-date">{date}</h5>
            <h5 className="blog-user"><i className="fas fa-user"></i>{author}</h5>
          </div>
          <h3 className="title-sm">{title}</h3>
          <p className="blog-text">
            {description}
          </p>
          <a href="#" className="btn small">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
