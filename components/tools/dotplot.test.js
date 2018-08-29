import React from 'react';
import { shallow } from 'enzyme';

import Dotplot from './dotplot';

describe('Help module Dotplot', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <Dotplot />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
