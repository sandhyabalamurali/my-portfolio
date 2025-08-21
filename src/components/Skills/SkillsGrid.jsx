import React from 'react';
import styled from 'styled-components';
import SkillCategory from './SkillCategory';
import SkillsSection from './SkillsSection';
import { NeonCard, Header as NeonHeader, Content as NeonContent } from './NeonPrimitives';
import { LuCode2 as Code, LuPalette as Globe, LuServer as Database, LuBrain as Brain, LuZap as Zap, LuCpu as AI } from 'react-icons/lu';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  
  @media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (min-width: 1024px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`;

const gradients = {
  cyan: ['#00e5ff', '#3b82f6'],
  purple: ['#8b5cf6', '#ec4899'],
  pink: ['#ec4899', '#fb923c'],
  green: ['#22c55e', '#00e5ff'],
  blue: ['#3b82f6', '#8b5cf6'],
  orange: ['#f97316', '#eab308'] // New gradient for AI/ML
};

const iconForTitle = (title) => {
  const t = (title || '').toLowerCase();
  if (t.includes('language')) return Code;
  if (t.includes('front')) return Globe;
  if (t.includes('back') || t.includes('api')) return Database;
  if (t.includes('core') || t.includes('cs')) return Brain;
  if (t.includes('ai') || t.includes('ml')) return AI;
  return Zap;
};

const paletteForTitle = (title) => {
  const t = (title || '').toLowerCase();
  if (t.includes('language')) return gradients.cyan;
  if (t.includes('front')) return gradients.purple;
  if (t.includes('back') || t.includes('api')) return gradients.pink;
  if (t.includes('database') || t.includes('tool')) return gradients.green;
  if (t.includes('core')) return gradients.blue;
  if (t.includes('ai') || t.includes('ml')) return gradients.orange;
  return gradients.cyan;
};

const SkillsGrid = ({ skills }) => {
  return (
    <GridContainer>
      {skills.map((category, index) => {
        const Icon = iconForTitle(category.title);
        const [ga, gb] = paletteForTitle(category.title);
        return (
          <NeonCard key={index} $gradientA={ga} $gradientB={gb}>
            <div style={{ padding: '20px' }}>
              <SkillsSection
                title={category.title}
                description={category.description || `Technologies and tools in ${category.title.toLowerCase()} development`}
                icon={Icon}
              >
                <NeonContent>
                  <SkillCategory category={category} />
                </NeonContent>
              </SkillsSection>
            </div>
          </NeonCard>
        );
      })}
    </GridContainer>
  );
};

export default SkillsGrid;
