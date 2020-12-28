import 'components/FullscreenLoader/node_modules/jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import DashboardCard from './DashboardCard'

describe('DashboardCard', () => {

	it('has title and description', () => {

		const wrap = mount<typeof DashboardCard>(
			<DashboardCard description={'Description'} title={'Title'} />
		)
		expect(wrap.find('h6').text()).toEqual('Title')
		expect(wrap.find('p').text()).toEqual('Description')

	})

	it('has image as child', () => {

		const wrap = mount<typeof DashboardCard>(
			<DashboardCard description={'Description'} title={'Title'}>
				<img src={'fakePathToImage'} />
			</DashboardCard>
		)
		expect(wrap.find('img').get(0).props).toHaveProperty(
			'src',
			'fakePathToImage'
		)

	})

	it('has image as header child', () => {

		const wrap = mount<typeof DashboardCard>(
			<DashboardCard
				description={'Description'}
				headerChildren={<img src={'fakePathToImage'} />}
				title={'Title'}
			/>
		)
		expect(wrap.find('img').get(0).props).toHaveProperty(
			'src',
			'fakePathToImage'
		)

	})

})
