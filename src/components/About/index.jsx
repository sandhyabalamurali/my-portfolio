import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 80px 0;
  background: ${({ theme }) => theme.bg};
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  padding: 0 1rem;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
    box-shadow: 0 0 16px ${({ theme }) => theme.primary}66;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 800px;
  text-align: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;

const AboutText = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  font-size: 1.1rem;
`;

const AboutStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatItem = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.card}cc;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutTitle>About Me</AboutTitle>
        <AboutContent>
          <AboutText>
            <p>
              I'm a passionate developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications 
              that solve real-world problems.
            </p>
            <p style={{ marginTop: '1rem' }}>
              With a strong foundation in both frontend and backend development, 
              I enjoy working with cutting-edge technologies and continuously 
              learning new skills to stay current in this ever-evolving field.
            </p>
          </AboutText>
          <AboutStats>
            <StatItem>
              <StatNumber>3+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>20+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </StatItem>
          </AboutStats>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;