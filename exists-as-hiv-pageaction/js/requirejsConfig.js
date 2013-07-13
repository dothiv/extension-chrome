// see http://prezi.com/rodnyr5awftr/requirejs-in-chrome-extensions/
var requirejsConfig = {
// by default load any module IDs from js/modules
    baseUrl: '/js/modules',
// optionally specify different paths for specific modules
    paths: {
        lib: '/js/lib'
    },
    shim: {
        'lib/qwest': {
            exports: 'qwest'
        }
    }
}