const path = require('path');

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    stats: {
        env: true,
    },
};

module.exports = config;
