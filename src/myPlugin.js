let config = {
    host: 'http://inside.winchannel.net:18020'
}
export default {
    install: function(Vue) {
        Vue.prototype.$myConfig = config;
    }
}
