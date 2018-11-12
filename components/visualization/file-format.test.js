import React from 'react';
import { shallow } from 'enzyme';

import FileFormat from './file-format';

describe('Help module FileFormat', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <FileFormat />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
