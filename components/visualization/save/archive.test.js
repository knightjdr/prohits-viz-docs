import React from 'react';
import { shallow } from 'enzyme';

import Archive from './archive';

describe('Help module Archive', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Archive />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
