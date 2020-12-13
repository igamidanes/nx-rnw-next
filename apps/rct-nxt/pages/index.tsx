import React from 'react';
import styled from 'styled-components';

import { UiComponent1 } from '@rnw-nxt/ui-component1';

const StyledPage = styled.div`
  rnw-nxt .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <div>styled page</div>
      <UiComponent1 />
    </StyledPage>
  );
}

export default Index;
