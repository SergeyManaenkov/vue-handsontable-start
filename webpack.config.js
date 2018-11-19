const path = require( 'path' );
const webpack = require( 'webpack' );


const outputFileName = 'build';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, './dist' ),
        publicPath: '/dist/',
        filename: outputFileName + '.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};



