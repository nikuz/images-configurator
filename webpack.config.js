
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const scriptName = 'bundle.js';
const isProduction = process.env.NODE_ENV === 'production';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const dstPath = path.resolve(appDirectory, './dst');
const publicPath = path.resolve(appDirectory, './test/public');
const indexPath = path.resolve(appDirectory, publicPath, 'index.html');

const plugins = [
    new webpack.EnvironmentPlugin([
        'NODE_ENV',
    ]),
];

let cacheDirectory = true;
let devtool = 'eval-source-map';
let externals;
if (isProduction) {
    cacheDirectory = false;
    devtool = false;
    externals = {
        '@nikuz/images-core': '@nikuz/images-core',
        react: 'react',
        'react-dom': 'react-dom',
        'react-intl': 'react-intl',
    };
} else {
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(appDirectory, publicPath),
            to: dstPath,
        }]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: indexPath,
            scriptName,
            rootPath: '/',
            inject: false,
        })
    );
}

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory,
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-flow',
                ],
                plugins: [
                    [
                        require.resolve('@babel/plugin-proposal-object-rest-spread'), { useBuiltIns: true },
                    ],
                    require.resolve('@babel/plugin-proposal-class-properties'),
                ],
            },
        },
    },
    {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        loaders: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
        ],
    },
    {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        use: [
            {
                loader: require.resolve('file-loader'),
                options: {
                    limit: 1000000,
                    name: '/fonts/[name].[ext]',
                },
            },
        ],
    },
    {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
    },
];

const options = {
    mode: isProduction ? 'production' : 'development',
    entry: isProduction ? './src/index.js' : './test/index.js',
    target: 'web',
    output: {
        path: dstPath,
        filename: scriptName,
        libraryTarget: isProduction ? 'commonjs2' : 'var',
    },
    devtool,
    module: {
        strictExportPresence: true,
        rules,
    },
    plugins,
    devServer: {
        contentBase: dstPath,
        hot: true,
        inline: true,
        compress: true,
        port: 9000,
        watchOptions: {
            ignored: /node_modules/,
        },
    },
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
    externals,
};
module.exports = options;
