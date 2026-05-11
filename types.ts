
// Fixed: Added React import to resolve the "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TimelineStep {
  text: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}