import { funnyCat } from '@/types';
import React from 'react';

const SSR = async () => {
  const response = await fetch('https://catfact.ninja/fact', {
    cache: 'no-cache',
  });
  const results = await response.json();
  const catFact: funnyCat = results;

  return (
    <div>
      <div>
        {' '}
        Fun Fact About Cats! 😺
        <br />
        {catFact.fact}
        <br />
        글자수 : {catFact.length}
      </div>
    </div>
  );
};

export default SSR;
