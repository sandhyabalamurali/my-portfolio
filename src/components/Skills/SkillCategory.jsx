import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsDot } from 'react-icons/bs';

const List = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0 0 0 0.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem 1.5rem;
`;

const Item = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;
`;

const Dot = styled(motion.span)`
  display: grid;
  place-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 12px ${({ theme }) => theme.primary}77;
`;

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const SkillCategory = ({ category }) => {
  return (
    <List variants={listVariants} initial="hidden" animate="visible">
      {category.skills.map((skill, index) => (
        <Item key={index} variants={itemVariants}>
          <Dot />
          {typeof skill === 'string' ? skill : skill.name}
        </Item>
      ))}
    </List>
  );
};

export default SkillCategory;
