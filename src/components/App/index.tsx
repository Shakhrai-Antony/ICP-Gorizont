import React, { useEffect } from 'react';

import { PageHeader, SectionWrapper } from '@/components/App/styles';
import Photos from '@/components/Photos';

const App = () => {
  useEffect(() => {
    document.title = 'photos';
  }, []);

  return (
    <SectionWrapper>
      <PageHeader>Фотографии</PageHeader>
      <Photos />
    </SectionWrapper>
  );
};

export default App;
