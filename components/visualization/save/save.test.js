import React from 'react';
import { shallow } from 'enzyme';

import Save from './save';

describe('Help module Save', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Save />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
