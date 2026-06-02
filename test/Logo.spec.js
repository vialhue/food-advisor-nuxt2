import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo.vue', () => {
  it('se monta correctamente', () => {
    const wrapper = mount(Logo)

    expect(wrapper.exists()).toBe(true)
  })
})