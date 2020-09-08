import 'jsdom-global/register';
import * as React from 'react';
import { mount } from 'enzyme';
import CopyToClipboard from './CopyToClipboard';
import { act } from 'react-dom/test-utils';

describe('CopyToClipboard', () => {
  it('simulates the click event', () => {
    jest.useFakeTimers();
    let wrap = mount<typeof CopyToClipboard>(
      <CopyToClipboard message="Hey :)" />
    );
    act(() => {
      wrap.find('.copy-clipboard').first().simulate('click');
      jest.runAllTimers();
    });
  });
  it('copies the message and checks for disabled', () => {
    let wrap = mount<typeof CopyToClipboard>(
      <CopyToClipboard message="Hey :)" />
    );
    expect(wrap.props()).toHaveProperty('message', 'Hey :)');
    expect(wrap.find('.copy-clipboard').first().props()).toHaveProperty(
      'data-clipboard-text',
      'Hey :)'
    );
    expect(wrap.children().children().first().props().style).toHaveProperty(
      'color',
      '#0b4566'
    );
    expect(wrap.children().children().first().props().style).toHaveProperty(
      'cursor',
      'pointer'
    );
  });
  it('copies the url', () => {
    let wrap = mount<typeof CopyToClipboard>(<CopyToClipboard />);
    expect(wrap.find('.copy-clipboard').first().props()).toHaveProperty(
      'data-clipboard-text',
      'about:blank'
    );
    expect(
      wrap.find('.copy-clipboard').first().children().children().props()
    ).toHaveProperty('title', 'Copy URL');
  });
  it('is disabled', () => {
    let wrap = mount<typeof CopyToClipboard>(<CopyToClipboard disabled />);
    expect(wrap.children().children().first().props().style).toHaveProperty(
      'color',
      '#cfdbe2'
    );
    expect(wrap.children().children().first().props().style).toHaveProperty(
      'cursor',
      'no-drop'
    );
  });
});
