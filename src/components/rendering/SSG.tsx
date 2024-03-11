import React from 'react';
import { funnyCat } from '@/types';

// 서버 컴포넌트는 async 사용 가능!
// 아무것도 하지 않으면 SSG
const SSG = async () => {
  const response = await fetch('https://catfact.ninja/fact', {
    cache: 'force-cache',
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

export default SSG;
