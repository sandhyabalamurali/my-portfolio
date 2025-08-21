import React from 'react';
import { skills } from '../../data/constants';
import SkillsContainer from './SkillsContainer';
import SkillsHeader from './SkillsHeader';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsHeader />
      <SkillsGrid skills={skills} />
    </SkillsContainer>
  );
};

export default Skills;