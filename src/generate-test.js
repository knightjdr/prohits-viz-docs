const generateTest = (filename, moduleName) => (
  `import React from 'react';
  import { shallow } from 'enzyme';

  import ${moduleName} from './${filename}';

  describe('Help module ${moduleName}', () => {
    it('should render and match snapshot', () => {
      const wrapper = shallow(
        <${moduleName} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
  `
);

module.exports = generateTest;
