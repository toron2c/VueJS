import { mount } from '@vue/test-utils';
import testcomponent from "./testcomponent";

describe('testcomponent', ()=> {
   test('Content from props', () => {
       const wrapper = mount(testcomponent, {
           propsData: {
               message: 'Hello from tests!',
           }
       })
       expect(wrapper.text()).toEqual('The message is Hello from tests!')
   })
})
