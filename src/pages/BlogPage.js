import React, { useState } from 'react';
import BlogList from '../components/Blog/BlogList';
import SearchBar from '../components/Blog/SearchBar';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const blogs = [
    { 
      id: 1, 
      title: 'Cultural Heritage of India', 
      image: 'https://via.placeholder.com/800x400', 
      summary: 'An overview of the rich cultural heritage of India, including ancient traditions, art, and monuments.', 
      content: 'India has a rich cultural heritage dating back thousands of years. The ancient traditions, art, and monuments are deeply intertwined with the country’s history, religion, and philosophy. This article explores the cultural diversity, festivals, and regional variations across India.',
      author: 'John Doe',
      date: 'January 10, 2024',
    },
    { 
      id: 2, 
      title: 'The Best Indian Festivals You Must Attend', 
      image: 'https://via.placeholder.com/800x400', 
      summary: 'A list of the top Indian festivals that celebrate culture, art, and tradition in unique ways.', 
      content: 'India is famous for its festivals, each more colorful and lively than the last. From Diwali, the festival of lights, to Holi, the festival of colors, there’s always a reason to celebrate. This article will take you through the best festivals you should attend in India, and how they bring communities together.',
      author: 'Jane Smith',
      date: 'February 14, 2024',
    },
    // Add other blogs here...
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  
  return (
    <div style={styles.blogPage}>
      <SearchBar setSearchQuery={setSearchQuery} />
      <BlogList blogs={filteredBlogs} />
    </div>
  );
};

const styles = {
  blogPage: {
    padding: '40px',
    backgroundColor: '#ffffff',
    maxWidth: '1200px',
    margin: '0 auto',
  }
};

export default BlogPage;
