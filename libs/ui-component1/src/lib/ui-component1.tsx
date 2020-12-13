import React from 'react';

import { View, Text } from 'react-native';

import styled from 'styled-components/native';

/* eslint-disable-next-line */
export interface UiComponent1Props {}

const StyledUiComponent1 = styled.View`
  color: pink;
`;

export function UiComponent1(props: UiComponent1Props) {
  return (
    <StyledUiComponent1>
      <View>
        <Text>ui-component1!</Text>
      </View>
    </StyledUiComponent1>
  );
}

export default UiComponent1;
