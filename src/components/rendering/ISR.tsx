import { funnyCat } from '@/types';
import React from 'react';

const ISR = async () => {
  const response = await fetch('https://catfact.ninja/fact', {
    //5초마다 새로운 데이터를 fetch 한다.
    next: {
      revalidate: 5,
    },
  });
  const results = await response.json();
  const catFact: funnyCat = results;

  return (
    <div>
      <div>
        😺 Fun Fact About Cats!
        <br />
        {catFact.fact}
        <br />
        글자수 : {catFact.length}
      </div>
    </div>
  );
};

export default ISR;
