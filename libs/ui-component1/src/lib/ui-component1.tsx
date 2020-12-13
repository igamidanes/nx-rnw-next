import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiComponent1Props {}

const StyledUiComponent1 = styled.div`
  color: pink;
`;

export function UiComponent1(props: UiComponent1Props) {
  return (
    <StyledUiComponent1>
      <h1>ui-component1!</h1>
    </StyledUiComponent1>
  );
}

export default UiComponent1;
