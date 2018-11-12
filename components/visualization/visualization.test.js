import React from 'react';
import { shallow } from 'enzyme';

import Visualization from './visualization';

describe('Help module Visualization', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Visualization />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
