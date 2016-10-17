import config from './es2015.js';
import babel from 'rollup-plugin-babel';

config.entry = 'src/main.es5.ts';
config.dest = 'dist/saltyrtc-task-webrtc.es5.js';
config.format = 'iife';
config.moduleName = 'saltyrtc.tasks.webrtc';
config.useStrict = true;
config.plugins.push(
    babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
            // Use ES2015 but don't transpile modules since Rollup does that
            ['es2015', {modules: false}]
        ],
        plugins: ['external-helpers']
    })
)
config.globals = {
    'tweetnacl': 'nacl',
    'saltyrtc-client': 'saltyrtc.client',
    'chunked-dc': 'chunkedDc'
};

export default config;