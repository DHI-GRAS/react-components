import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import Loader from './Loader'

describe('Loader', () => {

	it('is minor loading', () => {

		const wrap = mount<typeof Loader>(<Loader isLoading />)
		expect(wrap.find('.MuiLinearProgress-root')).toHaveLength(1)
		expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(0)

	})

	it('is major Loading', () => {

		const wrap = mount<typeof Loader>(<Loader isMajorLoading />)
		expect(wrap.find('.MuiLinearProgress-root')).toHaveLength(0)
		expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(1)

	})

	it('comes in front of the other elements while loading', () => {

		const wrap = mount<typeof Loader>(<Loader isMajorLoading />)
		expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(1)
		expect(wrap.find('.MuiGrid-container').props().style).toEqual({
			backgroundColor: 'rgba(13,57,88,0.9)',
			color: 'white',
			height: '100vh',
			position: 'fixed',
			width: '100vw',
			zIndex: 2000,
		})

	})

	it('prioritizes isMajorLoading over isLoading', () => {

		const wrap = mount<typeof Loader>(
			<Loader isMajorLoading isLoading />
		)
		expect(wrap.find('.MuiLinearProgress-root')).toHaveLength(0)
		expect(wrap.find('.MuiCircularProgress-root')).toHaveLength(1)

	})

})
