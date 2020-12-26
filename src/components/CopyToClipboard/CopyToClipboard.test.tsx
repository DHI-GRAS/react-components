import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import CopyToClipboard from './CopyToClipboard'

describe('CopyToClipboard', () => {

	it('simulates the click event', () => {

		jest.useFakeTimers()
		const wrap = mount<typeof CopyToClipboard>(
			<CopyToClipboard message={'Hey :)'} />
		)
		act(() => {

			wrap.find('.copy-clipboard').first().invoke('onClick')
			jest.runAllTimers()

		})

	})
	it('copies the message and checks for disabled', () => {

		const wrap = mount<typeof CopyToClipboard>(
			<CopyToClipboard message={'Hey :)'} />
		)
		expect(wrap.props()).toHaveProperty('message', 'Hey :)')
		expect(wrap.find('.copy-clipboard').first().props()).toHaveProperty(
			'data-clipboard-text',
			'Hey :)'
		)
		expect(wrap.children().children().first().props().style).toHaveProperty(
			'color',
			'#0b4566'
		)
		expect(wrap.children().children().first().props().style).toHaveProperty(
			'cursor',
			'pointer'
		)

	})
	it('copies the url', () => {

		const wrap = mount<typeof CopyToClipboard>(<CopyToClipboard />)
		expect(wrap.find('.copy-clipboard').first().props()).toHaveProperty(
			'data-clipboard-text',
			'about:blank'
		)
		expect(
			wrap.find('.copy-clipboard').first().children().children().props()
		).toHaveProperty('title', 'Copy URL')

	})
	it('is disabled', () => {

		const wrap = mount<typeof CopyToClipboard>(<CopyToClipboard disabled />)
		expect(wrap.children().children().first().props().style).toHaveProperty(
			'color',
			'#cfdbe2'
		)
		expect(wrap.children().children().first().props().style).toHaveProperty(
			'cursor',
			'no-drop'
		)

	})

})
