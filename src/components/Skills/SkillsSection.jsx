import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.div)`
  margin-bottom: 2.5rem;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const IconBadge = styled(motion.div)`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  box-shadow: 0 10px 24px ${({ theme }) => theme.primary}22;
  overflow: hidden;
  color: ${({ theme }) => theme.primary};
`;

const IconGlow = styled(motion.div)`
  position: absolute;
  inset: -30%;
  background: radial-gradient(60% 60% at 50% 50%, ${({ theme }) => theme.primary}33, transparent 70%);
  pointer-events: none;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0.25rem 0 0 0;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillsSection = ({ title, description, icon: Icon, children }) => {
  return (
    <SectionContainer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader>
        {Icon && (
          <IconBadge initial={false} whileHover={{ scale: 1.03 }}>
            <IconGlow />
            <Icon size={32} style={{ color: 'currentColor', filter: 'drop-shadow(0 2px 6px rgba(133,76,230,0.45))' }} />
          </IconBadge>
        )}
        <TitleBlock>
          <SectionTitle>{title}</SectionTitle>
          {description && <SectionDescription>{description}</SectionDescription>}
        </TitleBlock>
      </SectionHeader>
      {children}
    </SectionContainer>
  );
};

export default SkillsSection;
