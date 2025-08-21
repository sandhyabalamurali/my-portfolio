import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1rem;
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

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SkillsHeader = () => {
  return (
    <HeaderContainer>
      <Title>Skills</Title>
      <Subtitle>
        Tools and technologies I use across frontend, backend, and more
      </Subtitle>
    </HeaderContainer>
  );
};

export default SkillsHeader;
