import React from 'react';
import { shallow } from 'enzyme';

import Tools from './tools';

describe('Help module Tools', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Tools />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
