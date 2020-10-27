import 'jsdom-global/register';
import * as React from 'react';
import { mount } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('is minor loading', () => {
    let wrap = mount<typeof Loader>(<Loader isLoading={true} />);
    expect(wrap.find('.MuiLinearProgress-root')).toHaveLength(1);
    expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(0);
  });

  it('is major Loading', () => {
    let wrap = mount<typeof Loader>(<Loader isMajorLoading={true} />);
    expect(wrap.find('.MuiLinearProgress-root')).toHaveLength(0);
    expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(1);
  });

  it('comes in front of the other elements while loading', () => {
    let wrap = mount<typeof Loader>(<Loader isMajorLoading={true} />);
    expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(1);
    expect(wrap.find('.MuiGrid-container').props().style).toEqual({
      backgroundColor: 'rgba(13,57,88,0.9)',
      color: 'white',
      height: '100vh',
      position: 'fixed',
      width: '100vw',
      zIndex: 2000,
    });
  });

  it('prioritizes isMajorLoading over isLoading', () => {
    let wrap = mount<typeof Loader>(
      <Loader isMajorLoading={true} isLoading={true} />
    );
    expect(wrap.find('.MuiLinearProgress-root')).toHaveLength(0);
    expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(1);
  });

  // it('has image as child', () => {
  //   let wrap = mount<typeof DashboardCard>(
  //     <DashboardCard description="Description" title="Title">
  //       <img src="fakePathToImage" />
  //     </DashboardCard>
  //   );
  //   expect(wrap.find('img').get(0).props).toHaveProperty(
  //     'src',
  //     'fakePathToImage'
  //   );
  // });

  // it('has image as header child', () => {
  //   let wrap = mount<typeof DashboardCard>(
  //     <DashboardCard
  //       description="Description"
  //       headerChildren={<img src="fakePathToImage" />}
  //       title="Title"
  //     />
  //   );
  //   expect(wrap.find('img').get(0).props).toHaveProperty(
  //     'src',
  //     'fakePathToImage'
  //   );
  // });
});
