import React from 'react';
import { render } from '@testing-library/react';

import UiComponent1 from './ui-component1';

describe('UiComponent1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponent1 />);
    expect(baseElement).toBeTruthy();
  });
});
