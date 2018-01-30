export default {
    input: 'index.es.js',
    output: {
        file: 'index.js',
        format: 'umd',
        name: 'SurplusOnMixin',
        exports: 'named',
        globals: { 'surplus': 'Surplus' }
    },
    external: ['surplus'],
}