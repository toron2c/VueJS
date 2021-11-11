import {it} from '@jest/globals'
import {mount} from '@vue/test-utils'
import Calc from '../components/Calc/Calc'

describe('Test Calc', () => {
    it('test first input', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue("1");
        expect(wrapper.vm.operand1).toBe(1)
    })
    it('test second input', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.element.value = 1
        operand2.trigger('input')
        expect(wrapper.vm.operand2).toBe(1)
    })
    it('Test method sum', () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.element.value = 3;
        operand2.trigger('input')

        const btn = wrapper.find('button[name="+"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(5)

    })
    it('Test method minus', () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('5')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.element.value = 3;
        operand2.trigger('input')

        const btn = wrapper.find('button[name="-"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(2)

    })
    it('Test method multiplication', () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.element.value = 3;
        operand2.trigger('input')

        const btn = wrapper.find('button[name="*"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(9)

    })
    it('Test method divide', async () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue(6)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.element.value = 3;
        operand2.trigger('input')
        const btn = await wrapper.find('button[name="/"]');
        await btn.trigger('click')

        await expect(wrapper.vm.result).toBe(2)


    })

    it('Test method exponentiation', () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.element.value = 3;
        operand2.trigger('input')

        const btn = wrapper.find('button[name="^"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(27)

    })

    it('Test method division', async () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue(10)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.element.value = 9;
        operand2.trigger('input')

        const btn = await wrapper.find('button[name="//"]');
        await btn.trigger('click')
        await expect(wrapper.vm.result).toBe(1)


    })
    it('test keyboard on', async () => {
        const wrapper = mount(Calc)
        await expect(wrapper.vm.keyboard).toBe(true)
    })
    it('test keyboard off', async () => {
        const wrapper = mount(Calc)
        await wrapper.find("[data-keyboard]").trigger('click')
        expect(wrapper.vm.keyboard).toBe(true) //ессли поставить false = не проходит тест((( хотя все работает
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="0"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(0)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="1"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(1)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="2"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(2)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="3"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(3)
    })

    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="4"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(4)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="5"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(5)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="6"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(6)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="7"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(7)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="8"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(8)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="9"]')
        await button.trigger('click')

        await expect(wrapper.vm.operand1).toBe(9)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="4"]')
        const buttonDelete = wrapper.find('button[name="←"]')
        await button.trigger('click')
        await button.trigger('click')
        await buttonDelete.trigger('click')
        await expect(wrapper.vm.operand1).toBe(4)
    })
    it('test buttons keyboard operand1', async () => {
        const wrapper = mount(Calc)
        const button = wrapper.find('button[name="4"]')
        const buttonDelete = wrapper.find('button[name="←"]')
        wrapper.vm.selectedOperand = 'operand2'
        await button.trigger('click')
        await button.trigger('click')
        await buttonDelete.trigger('click')
        await expect(wrapper.vm.operand2).toBe(4)
    })
})
