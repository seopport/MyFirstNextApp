import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Understanding rendering 👽',
  description: 'Generated by create next app',
};

const renderingLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>🤓 Next.js의 렌더링 기법을 이해해봅시다. 👽{children}</div>;
};

export default renderingLayout;
