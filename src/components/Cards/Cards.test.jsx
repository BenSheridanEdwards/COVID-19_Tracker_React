import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';

import Cards from './Cards';

const setup = (props={}) => {
  const wrapper = shallow(<Cards {...props} />)
  return wrapper;
}

it('renders cards component without error', () =>{
  const wrapper = setup();
  const cardsComponent = findByTestAttr(wrapper, 'component-cards');
  expect(cardsComponent.length).toBe(1);
});
