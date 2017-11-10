import Vue from 'vue'
import Foo from '../../src/component/foo.vue'

describe('foo.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(Foo)
        })
        expect(vm.$el.querySelector('h2').textContent).toBe('Foo')
        const p_elems = vm.$el.querySelectorAll('p')
        expect(p_elems[1].textContent).toBe('Tada: Hophop')
    })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
