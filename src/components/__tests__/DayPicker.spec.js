import { shallowMount } from '@vue/test-utils'
import DayPicker from '../DayPicker.vue'
import { dayToday } from '../../utils.js'

const wrapperFactory = (mountingOptions = {}) => {
    return shallowMount(DayPicker, mountingOptions)
}

describe('DayPicker.vue', () => {
    let wrapper

    afterEach(() => {
        wrapper.unmount()
    })

    it('корректно отображает дни месяца', async () => {
        wrapper = wrapperFactory({
            props: {
                daysInMonth: 31
            }
        })

        expect(wrapper.findAll('.day').length).toEqual(31)
        expect(wrapper.findAll('.day')[30].text()).toBe('31')

        await wrapper.setProps({ daysInMonth: 30})

        expect(wrapper.findAll('.day').length).toEqual(30)
        expect(wrapper.findAll('.day')[29].text()).toBe('30')

        await wrapper.setProps({ daysInMonth: 28})

        expect(wrapper.findAll('.day').length).toEqual(28)
        expect(wrapper.findAll('.day')[27].text()).toBe('28')
    })

    it('корректно отображает сегодняшний день', () => {
        wrapper = wrapperFactory({
            props: {
                daysInMonth: 31
            }
        })

        const today = dayToday().toString()

        expect(wrapper.find('.today').exists()).toBe(true)
        expect(wrapper.find('.today').text()).toEqual(today)
    })

    it('корректно отображает выбранный день', () => {
        wrapper = wrapperFactory({
            props: {
                daysInMonth: 31,
                selectedDay: 14
            }
        })

        expect(wrapper.find('.selected').exists()).toBe(true)
        expect(wrapper.find('.selected').text()).toEqual('14')
    })

    it('корректно обрабатывает выбор дня', async () => {
        wrapper = wrapperFactory({
            props: {
                daysInMonth: 31
            }
        })

        const dayToSelect = wrapper.find('#day-5')

        await dayToSelect.trigger('click')

        expect(wrapper.emitted()).toHaveProperty('update:selectedDay')
        expect(wrapper.emitted()['update:selectedDay']).toHaveLength(1)
        expect(wrapper.emitted()['update:selectedDay'][0]).toEqual([5])
    })
})