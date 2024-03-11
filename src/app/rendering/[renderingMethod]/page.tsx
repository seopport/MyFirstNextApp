import CSR from '@/components/rendering/CSR';
import ISR from '@/components/rendering/ISR';
import SSG from '@/components/rendering/SSG';
import SSR from '@/components/rendering/SSR';
import { Metadata } from 'next';
import React from 'react';

const renderingMethodPage = ({ params }: { params: { renderingMethod: string } }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>{params.renderingMethod} page</div>
      {(() => {
        switch (params.renderingMethod) {
          case 'SSG':
            return <SSG />;
          case 'ISR':
            return <ISR />;
          case 'SSR':
            return <SSR />;
          case 'CSR':
            return <CSR />;
        }
      })()}
    </div>
  );
};

export default renderingMethodPage;
