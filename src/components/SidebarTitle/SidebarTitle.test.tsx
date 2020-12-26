import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import SidebarTitle from './SidebarTitle'

describe('SidebarTitle', () => {

	it('has title and color', () => {

		const wrap = mount<typeof SidebarTitle>(
			<SidebarTitle title={'Its me'} titleColor={'#FFFFFF'} />
		)
		expect(wrap.find('h2').text()).toEqual('Its me')
		expect(wrap.find('h2').get(0).props.style).toHaveProperty(
			'color',
			'#FFFFFF'
		)

	})
	it('has image', () => {

		const wrap = mount<typeof SidebarTitle>(
			<SidebarTitle title={'Its me'} image={'fakePathToImage'} />
		)
		expect(wrap.find('img').get(0).props).toHaveProperty(
			'src',
			'fakePathToImage'
		)

	})
	it('has background color', () => {

		const wrap = mount<typeof SidebarTitle>(
			<SidebarTitle title={'Its me'} backgroundColor={'#FFFFFF'} />
		)
		expect(wrap.find('div').get(0).props.style).toHaveProperty(
			'backgroundColor',
			'#FFFFFF'
		)

	})
	it('has subtitles and color', () => {

		const wrap = mount<typeof SidebarTitle>(
			<SidebarTitle
				title={'Its me'}
				subTitle={[ 'subtitle1', 'subtitle2' ]}
				subTitleColor={'#FFFFFF'}
			/>
		)
		expect(wrap.find('h4')).toHaveLength(2)
		expect(wrap.find('h4').get(0).props.style).toHaveProperty(
			'color',
			'#FFFFFF'
		)

	})
	it('has border and color', () => {

		const wrap = mount<typeof SidebarTitle>(
			<SidebarTitle
				title={'Its me'}
				bottomBorderSize={1}
				bottomBorderColor={'#0b4566'}
			/>
		)
		expect(wrap.find('div').get(0).props.style).toHaveProperty(
			'borderBottom',
			'1px solid #0b4566'
		)

	})

})
