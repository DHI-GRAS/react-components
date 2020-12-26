import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import AboutCard from './AboutCard'

describe('AboutCard', () => {

	it('has title, descriptionTitle and description', () => {

		const wrap = mount<typeof AboutCard>(
			<AboutCard
				title={'Title'}
				description={'Description'}
				descriptionTitle={'Description title'}
			/>
		)
		expect(wrap.find('h3').text()).toEqual('Title')
		expect(wrap.find('h6').text()).toEqual('Description title')
		expect(wrap.find('p').text()).toEqual('Description')

	})

	it('has image as child', () => {

		const wrap = mount<typeof AboutCard>(
			<AboutCard
				title={'Title'}
				description={'Description'}
				descriptionTitle={'Description title'}
			>
				<img src={'fakePathToImage'} />
			</AboutCard>
		)
		expect(wrap.find('img').get(0).props).toHaveProperty(
			'src',
			'fakePathToImage'
		)

	})

})
