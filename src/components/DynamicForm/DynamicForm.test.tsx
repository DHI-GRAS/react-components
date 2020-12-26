import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import { waitFor } from '@testing-library/dom'
import { act } from 'react-dom/test-utils'
import DynamicForm from './DynamicForm'
// jest.useFakeTimers();
const emailField = {
	name: 'email',
	type: 'email',
	label: 'Email',
	initialValue: '',
	componentType: 'TextField',
	fullWidth: false,
	multiline: false,
}

const firstnameField = {
	name: 'firstname',
	type: 'text',
	label: 'Firstname',
	initialValue: '',
	componentType: 'TextField',
	fullWidth: false,
	multiline: false,
}
describe('Dynamic Form', () => {

	act(() => {

		it('renders the textfield, checks initial values, checks width, adds data and submits', async() => {

			const wrap = mount<typeof DynamicForm>(
				<DynamicForm
					fields={[ emailField, firstnameField ]}
					onSubmitForm={values => async() => {

          	setTimeout(() => {}, 1000)

					}}
				/>
			)
			expect(
				wrap.find('form .MuiGrid-container .MuiGrid-item input').at(0).props()
			).toHaveProperty('value', '')
			expect(
				wrap.find('form .MuiGrid-container .MuiGrid-item input').at(1).props()
			).toHaveProperty('value', '')
			expect(
				wrap
					.find('form .MuiGrid-container .MuiGrid-item')
					.at(0)
					.hasClass('MuiGrid-grid-xs-6')
			).toBeTruthy()
			wrap
				.find('form .MuiGrid-container .MuiGrid-item input')
				.first()
				.simulate('change', {
					target: { name: 'email', value: 'email@email.com' },
				})
			wrap
				.find('form .MuiGrid-container .MuiGrid-item input')
				.at(1)
				.simulate('change', {
					target: { name: 'firstname', value: 'test' },
				})

			// wrap.update();

			expect(wrap.find('form .MuiGrid-container .MuiGrid-item')).toHaveLength(
				2
			)

			expect(
				wrap.find('form .MuiGrid-container .MuiGrid-item input').at(1).props()
			).toHaveProperty('value', 'test')
			expect(
				wrap.find('form .MuiGrid-container .MuiGrid-item input').at(0).props()
			).toHaveProperty('value', 'email@email.com')
			const preventDefault = jest.fn()
			wrap.find('button').simulate('submit', { preventDefault })

			expect(preventDefault).toHaveBeenCalled()

		})

	})

	// fullWidth
	// Select
	// disableOnLoad

})
