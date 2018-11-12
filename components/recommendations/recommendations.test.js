import React from 'react';
import { shallow } from 'enzyme';

import Recommendations from './recommendations';

describe('Help module Recommendations', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Recommendations />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
