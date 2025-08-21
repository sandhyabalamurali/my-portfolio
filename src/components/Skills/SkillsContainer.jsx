import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 80px 0;
  background: ${({ theme }) => theme.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 0; /* Reduced from 1 to 0 so floating icons show through */
`;

const Wrapper = styled.div`
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

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const SkillsContainer = ({ children }) => {
  return (
    <Container id="skills">
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
};

export default SkillsContainer;
