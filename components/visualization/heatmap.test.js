import React from 'react';
import { shallow } from 'enzyme';

import Heatmap from './heatmap';

describe('Help module Heatmap', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Heatmap />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
