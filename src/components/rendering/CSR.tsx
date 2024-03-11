'use client';

import { funnyCat } from '@/types';
import React, { useEffect, useState } from 'react';

const CSR = () => {
  const [catFact, setCatFact] = useState<funnyCat | null>(null);

  useEffect(() => {
    const fetchCatFact = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();
      setCatFact(result);
    };

    fetchCatFact();
  }, []);

  if (!catFact) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <div>
        {' '}
        Fun Fact About Cats! 😺
        <br />
        {catFact?.fact}
        <br />
        글자수 : {catFact?.length}
      </div>
    </div>
  );
};

export default CSR;
