import 'jsdom-global/register';
import * as React from 'react';
import { mount } from 'enzyme';
import DynamicForm from './DynamicForm';
import { act } from 'react-dom/test-utils';
jest.useFakeTimers();
const emailField = {
  name: 'email',
  type: 'email',
  label: 'Email',
  initialValue: '',
  componentType: 'TextField',
  fullWidth: false,
  multiline: false,
};

const firstnameField = {
  name: 'firstname',
  type: 'text',
  label: 'Firstname',
  initialValue: '',
  componentType: 'TextField',
  fullWidth: false,
  multiline: false,
};
describe('Dynamic Form', () => {
  it('renders the textfield, checks initial values, checks width, adds data and submits', () => {
    let result = '';
    let wrap = mount<typeof DynamicForm>(
      <DynamicForm
        fields={[emailField, firstnameField]}
        onSubmitForm={(values) => (result = values)}
      />
    );
    act(() => {
      expect(
        wrap.find('form .MuiGrid-container .MuiGrid-item input').at(0).props()
      ).toHaveProperty('value', '');
      expect(
        wrap.find('form .MuiGrid-container .MuiGrid-item input').at(1).props()
      ).toHaveProperty('value', '');
    });
    expect(
      wrap
        .find('form .MuiGrid-container .MuiGrid-item')
        .at(0)
        .hasClass('MuiGrid-grid-xs-6')
    ).toBeTruthy();
    act(() => {
      wrap
        .find('form .MuiGrid-container .MuiGrid-item input')
        .first()
        .simulate('change', {
          target: { name: 'email', value: 'email@email.com' },
        });
    });
    wrap
      .find('form .MuiGrid-container .MuiGrid-item input')
      .at(1)
      .simulate('change', {
        target: { name: 'firstname', value: 'test' },
      });

    expect(wrap.find('form .MuiGrid-container .MuiGrid-item')).toHaveLength(2);
    expect(
      wrap.find('form .MuiGrid-container .MuiGrid-item input').at(0).props()
    ).toHaveProperty('value', 'email@email.com');
    expect(
      wrap.find('form .MuiGrid-container .MuiGrid-item input').at(1).props()
    ).toHaveProperty('value', 'test');

    wrap.find('button').simulate('click');
  });
  // fullWidh
  // TextField
  // Select
  // disableOnLoad
  // Submit
});
