import VueGenerateForm from './components/VueGenerateForm'

const install = function(Vue, opts = {}) {
    Vue.component('VueGenerateForm', VueGenerateForm)
}

const API = {
    install,
    version: '1.1.0',
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default API