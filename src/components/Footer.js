import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 0px 0;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  min-width: 200px;

  @media (max-width: 576px) {
    margin: 0 0 20px;
    width: 100%;
    align-items: center;
  }

  h4 {
    color: #f75c7e;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    @media (max-width: 576px) {
      text-align: center;
    }

    li {
      margin-bottom: 10px;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #f75c7e;
      }
    }
  }
`;

const FooterSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    color: #fff;
    font-size: 1.8rem;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #f75c7e;
    }
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 30px;
  color: #999;
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  h1 {
    font-family: "Rubik Glitch Pop", sans-serif;
    font-size: 2.9rem;
    color: #fff;
    margin: 0;
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    color: grey;
    margin: 5px 0 0;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* SVG Wave */}
<div id="page-break" className="wave5">
  <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#767575", width: "153%", height: "84px", transform: "rotate(180deg)" }}>
    <path
      d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
      opacity=".25" className="animated-path5" />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5" className="animated-path5" />
    <path
      d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
      className="animated-path5" />
  </svg>
</div>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <h1 className="rubik-moonrocks-regular">Collegia.</h1>
            <p>Your Campus, Your Future.</p>
          </FooterLogo>
        </FooterColumn>

        <FooterColumn>
          <h4>About Us</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </FooterColumn>
        
        <FooterColumn>
          <h4>Follow Us</h4>
          <FooterSocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </FooterSocialIcons>
        </FooterColumn>
      </FooterContent>

      <FooterCopyright>
        &copy; {new Date().getFullYear()} The Cultural Circuit. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;