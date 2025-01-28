import React from 'react';
import styled from 'styled-components';

// Page Container
const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
`;

// Banner Section with Image Background
const Banner = styled.div`
  width: 100%;
  height: 350px;
  background: url('https://images.unsplash.com/photo-1519955266818-0231b63402bc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
`;

const BannerText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 30px 50px;
  border-radius: 10px;
  font-size: 2rem;
  font-family: 'Georgia', serif;
`;

const BannerSubtext = styled.p`
  font-size: 1.2rem;
  margin-top: 15px;
  font-weight: 300;
`;

// Section Titles
const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #2b3a42;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

// Flex Container for Resources
const ResourcesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 40px 20px;
`;

// Individual Resource Cards
const ResourceCard = styled.div`
  background-color: white;
  width: 550px;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

// Image for Each Resource
const ResourceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

// Title and Description for Resource Cards
const ResourceTitle = styled.h3`
  font-size: 1.8rem;
  color: #0077b6;
  padding: 15px;
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  text-align: center;
`;

const ResourceDescription = styled.p`
  font-size: 1rem;
  padding: 0 20px;
  color: #666;
  text-align: center;
  line-height: 1.6;
  font-weight: 300;
`;

// Button Style
const Button = styled.a`
  display: inline-block;
  background-color: #0077b6;
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 0px 30px 30px 0px;
  margin: 20px auto;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005f8c;
  }
`;

// External Resources Section
const ExternalResourcesSection = styled.div`
  background-color: #f7f7f7;
  padding: 50px 20px;
  text-align: center;
`;

const ExternalResourceButton = styled.a`
  display: inline-block;
  background-color: #0077b6;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 30px;
  margin: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005f8c;
  }
`;

// Educational Resources Page Component
const EducationalResources = () => {
  return (
    <PageContainer>
      {/* Banner Section */}
      <Banner>
        <BannerText>
          <h1>Cultural Resources for Education</h1>
          <BannerSubtext>Discover a wealth of knowledge to enhance your understanding of culture, heritage, and art.</BannerSubtext>
        </BannerText>
      </Banner>

      {/* Cultural Courses Section */}
      <div>
        <SectionTitle>Cultural Learning Courses</SectionTitle>
        <ResourcesContainer>
          <ResourceCard>
            <ResourceImage src="https://via.placeholder.com/350x200" alt="Cultural Course 1" />
            <ResourceTitle>Exploring Ancient Cultures</ResourceTitle>
            <ResourceDescription>Deep dive into the customs, rituals, and traditions of ancient civilizations.</ResourceDescription>
            <Button href="#">Start Learning</Button>
          </ResourceCard>

          <ResourceCard>
            <ResourceImage src="https://via.placeholder.com/350x200" alt="Cultural Course 2" />
            <ResourceTitle>History of Traditional Art</ResourceTitle>
            <ResourceDescription>Understand the evolution of art and its role in preserving cultural identity.</ResourceDescription>
            <Button href="#">Start Learning</Button>
          </ResourceCard>
        </ResourcesContainer>
      </div>

      {/* Workshops & Webinars Section */}
      <div>
        <SectionTitle>Upcoming Workshops & Webinars</SectionTitle>
        <ResourcesContainer>
          <ResourceCard>
            <ResourceImage src="https://via.placeholder.com/350x200" alt="Workshop 1" />
            <ResourceTitle>Reviving Folk Music</ResourceTitle>
            <ResourceDescription>Join a live session exploring the roots of folk music across various cultures.</ResourceDescription>
            <Button href="#">Register Now</Button>
          </ResourceCard>

          <ResourceCard>
            <ResourceImage src="https://via.placeholder.com/350x200" alt="Workshop 2" />
            <ResourceTitle>Photography for Cultural Preservation</ResourceTitle>
            <ResourceDescription>Learn how photography helps preserve cultural heritage and traditions.</ResourceDescription>
            <Button href="#">Join the Webinar</Button>
          </ResourceCard>
        </ResourcesContainer>
      </div>

      {/* External Resources Section */}
<ExternalResourcesSection>
  <SectionTitle>External Cultural Resources</SectionTitle>
  <div>
    <ExternalResourceButton href="https://www.culturalheritage.org/" target="_blank">Cultural Heritage Foundation</ExternalResourceButton>
    <ExternalResourceButton href="https://www.museumsofbangalore.com/" target="_blank">Museums of Bangalore</ExternalResourceButton>
    <ExternalResourceButton href="https://www.artsy.net/" target="_blank">Artsy</ExternalResourceButton>
    <ExternalResourceButton href="https://www.culture.gov.uk/" target="_blank">UK Government Culture</ExternalResourceButton>
    <ExternalResourceButton href="https://www.smithsonianmag.com/culture/" target="_blank">Smithsonian Culture</ExternalResourceButton>
    <ExternalResourceButton href="https://www.globalheritagefund.org/" target="_blank">Global Heritage Fund</ExternalResourceButton>
    <ExternalResourceButton href="https://www.worldheritagesites.org/" target="_blank">World Heritage Sites</ExternalResourceButton>
    <ExternalResourceButton href="https://www.mfa.org/" target="_blank">Museum of Fine Arts</ExternalResourceButton>
  </div>
</ExternalResourcesSection>

    </PageContainer>
  );
};

export default EducationalResources;
