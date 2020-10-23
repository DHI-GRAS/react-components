import 'jsdom-global/register';
import * as React from 'react';
import { mount } from 'enzyme';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@material-ui/icons';
import SidebarControl from './SidebarControl';

describe('SidebarControl', () => {
  it('shows the close icons when sidebar is opened for desktop and mobile', () => {
    let desktop = mount<typeof SidebarControl>(
      <SidebarControl openSidebar={true} mobile={false} />
    );
    expect(desktop.find('[data-testid="sidebar-close"]').exists()).toEqual(
      true
    );
    expect(desktop.find('[data-testid="sidebar-open"]').exists()).toEqual(
      false
    );
    expect(desktop.find('[data-testid="expand-close"]').exists()).toEqual(
      false
    );
    expect(desktop.find('[data-testid="expand-open"]').exists()).toEqual(false);

    let mobile = mount<typeof SidebarControl>(
      <SidebarControl openSidebar={true} mobile={true} />
    );
    expect(mobile.find('[data-testid="sidebar-close"]').exists()).toEqual(
      false
    );
    expect(mobile.find('[data-testid="sidebar-open"]').exists()).toEqual(false);
    expect(mobile.find('[data-testid="expand-close"]').exists()).toEqual(true);
    expect(mobile.find('[data-testid="expand-open"]').exists()).toEqual(false);
  });

  it('shows the open icons when sidebar is closed for desktop and mobile', () => {
    let desktop = mount<typeof SidebarControl>(
      <SidebarControl openSidebar={false} mobile={false} />
    );
    expect(desktop.find('[data-testid="sidebar-open"]').exists()).toEqual(true);
    expect(desktop.find('[data-testid="sidebar-close"]').exists()).toEqual(
      false
    );
    expect(desktop.find('[data-testid="expand-close"]').exists()).toEqual(
      false
    );
    expect(desktop.find('[data-testid="expand-open"]').exists()).toEqual(false);

    let mobile = mount<typeof SidebarControl>(
      <SidebarControl openSidebar={false} mobile={true} />
    );
    expect(mobile.find('[data-testid="sidebar-close"]').exists()).toEqual(
      false
    );
    expect(mobile.find('[data-testid="sidebar-open"]').exists()).toEqual(false);
    expect(mobile.find('[data-testid="expand-close"]').exists()).toEqual(false);
    expect(mobile.find('[data-testid="expand-open"]').exists()).toEqual(true);
  });

  it('has icons for switching tabs', () => {
    let desktop = mount<typeof SidebarControl>(
      <SidebarControl
        openSidebar={false}
        mobile={false}
        icons={[
          {
            id: 1,
            component: ExpandMoreIcon,
            tooltip: 'Tab 1',
          },
          {
            id: 2,
            component: ExpandLessIcon,
            tooltip: 'Tab 2',
          },
        ]}
      />
    );
    expect(desktop.find('[data-testid="tab-1"]').exists()).toEqual(true);
    expect(desktop.find('[data-testid="tab-2"]').exists()).toEqual(true);
    expect(desktop.find('[data-testid="tab-3"]').exists()).toEqual(false);
  });
});
