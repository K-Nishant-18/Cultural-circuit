import React, { useState } from 'react';

const CommentSection = ({ blogId }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    alert(`Comment submitted for blog ${blogId}: ${comment}`);
    setComment('');
  };

  return (
    <div style={styles.commentSection}>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment..."
        style={styles.commentInput}
      />
      <button onClick={handleSubmitComment} style={styles.commentButton}>Submit Comment</button>
    </div>
  );
};

const styles = {
  commentSection: {
    marginTop: '40px',
  },
  commentInput: {
    width: '100%',
    height: '100px',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '2px solid #ddd',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  commentButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CommentSection;
