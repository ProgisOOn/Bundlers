const ESbuild = require('esbuild');
const path = require('path');

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';
const isProd = mode === 'production';


ESbuild.build({
    outdir: path.resolve(__dirname, '..', '..', 'build'),
    entryPoints: [path.resolve(__dirname,'..','..','src', 'index.jsx')],
    entryNames: 'bundle',
    bundle: true,
    minify: isProd,

})