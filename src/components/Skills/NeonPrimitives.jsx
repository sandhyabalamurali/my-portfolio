import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const sweep = keyframes`
  0% { transform: translateX(-120%) rotate(12deg); opacity: 0; }
  30% { opacity: 0.35; }
  100% { transform: translateX(120%) rotate(12deg); opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(133, 76, 230, 0.10); }
  50% { box-shadow: 0 0 32px rgba(133, 76, 230, 0.28); }
`;

export const NeonCard = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  background: ${({ theme }) => theme.card}cc;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  will-change: transform, filter;

  &:hover { transform: translateY(-6px); border-color: ${({ theme }) => theme.primary}44; }

  /* Angled gradient sweep on hover */
  &::before {
    content: '';
    position: absolute;
    top: -40%;
    left: -40%;
    width: 80%;
    height: 180%;
    background: ${({ $gradientA = '#00e5ff', $gradientB = '#8b5cf6' }) => `linear-gradient(90deg, transparent, ${$gradientA}22, ${$gradientB}22, transparent)`};
    transform: translateX(-120%) rotate(12deg);
    pointer-events: none;
  }

  &:hover::before { animation: ${sweep} 1.2s ease forwards; }

  /* Soft inner pulse */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    animation: ${pulse} 4s ease-in-out infinite;
    pointer-events: none;
  }
`;

export const NeonBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.bgLight}cc;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ $gradientA = '#00e5ff', $gradientB = '#8b5cf6' }) => `linear-gradient(90deg, ${$gradientA}, ${$gradientB})`};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before { opacity: 0.18; }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;
