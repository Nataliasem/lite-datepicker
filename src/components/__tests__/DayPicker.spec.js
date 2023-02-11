import { shallowMount } from '@vue/test-utils'
import DayPicker from '../DayPicker.vue'

const wrapperFactory = (mountingOptions = {}) => {
    return shallowMount(DayPicker, mountingOptions)
}

describe('DayPicker.vue', () => {
    let wrapper

    afterEach(() => {
        wrapper.unmount()
    })

    it('тестовый тест', () => {
        wrapper = wrapperFactory()
        expect(wrapper.exists()).toBe(true)
    })
})