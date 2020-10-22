import 'jsdom-global/register';
import * as React from 'react';
import { mount } from 'enzyme';
import DashboardCard from './DashboardCard';

describe('DashboardCard', () => {
  it('has title, descriptionTitle and description', () => {
    let wrap = mount<typeof DashboardCard>(
      <DashboardCard description="Description" title="Title" />
    );
    expect(wrap.find('h3').text()).toEqual('Title');
    expect(wrap.find('h6').text()).toEqual('Description title');
    expect(wrap.find('p').text()).toEqual('Description');
  });

  it('has image as child', () => {
    let wrap = mount<typeof DashboardCard>(
      <DashboardCard description="Description" title="Title">
        <img src="fakePathToImage" />
      </DashboardCard>
    );
    expect(wrap.find('img').get(0).props).toHaveProperty(
      'src',
      'fakePathToImage'
    );
  });
});
