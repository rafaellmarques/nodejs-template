const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    mode: 'development',
    entry: {
        main: ['./src/scripts/js/main.js', './src/styles/scss/main.scss'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/assets'),
    },
    devtool: 'source-map',
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
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    resolve: {
        extensions: ['.css', '.scss'],
    },
};

module.exports = (env, argv) => {
    console.info({ mode: argv.mode });

    if (argv.mode === 'production') {
        config.devtool = false;
    }

    return config;
};
