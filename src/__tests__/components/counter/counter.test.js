import React from 'react';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import renderer from 'react-test-renderer';

import Counter from '../../../components/counter/counter.js';

describe('<Counter />', () => {
  it('renders a section', () => {
    const shallowCounter = shallow(<Counter />);
    expect(shallowCounter.find('section')).toBeTruthy();
  });
  it('renders two a tags', () => {
    const shallowCounter = shallow(<Counter />);
    expect(shallowCounter.find('a')).toBeTruthy();
  });
  it('renders a span', () => {
    const shallowCounter = shallow(<Counter />);
    expect(shallowCounter.find('span')).toBeTruthy();
  });
  it('has a state with a count', () => {
    const mountedCounter = mount(<Counter />);
    expect(mountedCounter.state('count')).toBeDefined();
  });
  it('increments the count when the a tag is clicked', () => {
    const mountedCounter = mount(<Counter />);
    const incrementATag = mountedCounter.find('.up-clicker');
    incrementATag.simulate('click');
    expect(mountedCounter.state('count')).toEqual(1);
  });
  it('increments the count when the a tag is clicked', () => {
    const mountedCounter = mount(<Counter />);
    const decrementATag = mountedCounter.find('.down-clicker');
    decrementATag.simulate('click');
    expect(mountedCounter.state('count')).toEqual(-1);
  });
  test('matches snapshot', () => {
    const snapshot = renderer.create(<Counter />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});