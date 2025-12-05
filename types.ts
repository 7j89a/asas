import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}