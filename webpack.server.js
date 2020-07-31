const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternal = require('webpack-node-externals')

const config = {
    //Inform webpack that i'm building a bundle for nodeJS, rather than for the browser. =)
    target: 'node',

    //Telling for webpack the root file of my server app
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build') 
    },

    externals: [webpackNodeExternal()]
}

module.exports = merge(baseConfig, config)