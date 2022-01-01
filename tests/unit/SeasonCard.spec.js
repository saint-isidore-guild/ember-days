import { shallowMount } from '@vue/test-utils'
import SeasonCard from '@/components/SeasonCard'

describe('SeasonCard.vue', () => {
  it('renders props when passed', () => {
    const msg = 'Spring February 1, 3, 4'
    const wrapper = shallowMount(SeasonCard, {
      propsData: { seasonName: 'Spring', startDate: new Date(2020, 1, 1, 0, 0, 0) }
    })
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
