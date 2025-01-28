import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components for the Contact Us Page
const ContactUsContainer = styled.div`
  padding: 60px 20px;
  background: #fafafa;
  text-align: center;
`;

const Banner = styled.div`
  background: url('https://images.pexels.com/photos/369376/pexels-photo-369376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  color: #ffffff;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);


  
`;

const Heading = styled.h1`
  color: #333;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: 700;
`;

const SubHeading = styled.p`
  color: #666;
  font-size: 1.125rem;
  margin-bottom: 40px;
`;

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #f75c7e;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  height: 200px;
  resize: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #f75c7e;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #f75c7e;
  color: #ffffff;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e64a73;
    transform: translateY(-3px);
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send form data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <ContactUsContainer>
      {/* Banner Section */}
      <Banner>Contact Us</Banner>

      {/* Heading and Subheading */}
      <Heading>Get in Touch</Heading>
      <SubHeading>
        We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
      </SubHeading>

      {/* Contact Form */}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactUsContainer>
  );
};

export default ContactUs;
