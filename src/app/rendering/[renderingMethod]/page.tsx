import { Metadata } from 'next';
import React from 'react';

const renderingMethodPage = ({ params }: { params: { renderingMethod: string } }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>{params.renderingMethod} page</div>
  );
};

export default renderingMethodPage;
