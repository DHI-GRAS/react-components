import 'jsdom-global/register';
import * as React from 'react';
import { mount } from 'enzyme';
import SidebarControl from './SidebarControl';

describe('SidebarControl', () => {
  it('has default elements', () => {
    let wrap = mount<typeof SidebarControl>(
      <SidebarControl openSidebar={true} />
    );
  });
});
