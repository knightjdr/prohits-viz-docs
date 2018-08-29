import React from 'react';
import { shallow } from 'enzyme';

import Introduction from './introduction';

describe('Help module Introduction', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Introduction />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
