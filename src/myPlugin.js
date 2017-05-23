let config = {
    host: 'http://192.168.1.230'
}
export default {
    install: function(Vue) {
        Vue.prototype.$myConfig = config;
    }
}
