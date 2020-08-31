import 'jsdom-global/register';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import SidebarTitle from './SidebarTitle';
import toJson from 'enzyme-to-json';
describe('SidebarTitle', () => {
  test('snapshot renders', () => {
    let wrap = shallow<typeof SidebarTitle>(<SidebarTitle title="Its me" />);
    // expect(1).toEqual(1);
    expect(toJson(wrap)).toMatchSnapshot();
  });
  it('has title', () => {
    let wrap = mount<typeof SidebarTitle>(<SidebarTitle title="Its me" />);
    expect(wrap.find('h2').text()).toEqual('Its me');
  });

  it('has subtitles', () => {
    let wrap = mount<typeof SidebarTitle>(
      <SidebarTitle title="Its me" subTitle={['subtitle1', 'subtitle2']} />
    );
    expect(wrap.find('h4')).toHaveLength(2);
  });
});
