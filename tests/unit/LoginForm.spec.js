/* eslint-disable prettier/prettier */
import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
    it('emits an event with a user data payload', () => { // 'it' method and 'test' method work tha same way
        const wrapper = mount(LoginForm)

        // 1. Find text input
        const input = wrapper.find('[data-testid="name-input"]')  // or -> 'input[type="text"]' - if there is only one input
        // 2. Set value for text input
        input.setValue('Robert')
        // 3. Simulate form submission 
        wrapper.trigger('submit')
        // 4. Assert event has been emitted
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)
        // 5. Assert payload is correct 
        const expectedPayload = { name: 'Robert' }
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    })
})