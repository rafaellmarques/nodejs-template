const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    mode: 'development',
    entry: {
        main: ['./src/scripts/ts/main.ts', './src/styles/scss/main.scss'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/assets'),
        clean: true,
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            exclude: 'node_modules',
            fix: true,
            outputReport: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    resolve: {
        extensions: ['.css', '.scss', '.js', '.jsx', '.ts', '.tsx'],
    },
};

module.exports = (env, argv) => {
    console.info('env:', env);
    console.info('mode:', argv.mode);

    if (argv.mode === 'production') {
        config.devtool = false;
    }

    return config;
};
