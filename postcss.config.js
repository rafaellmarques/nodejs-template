const config = {
    plugins: [
        [
            'autoprefixer',
            {
                cascade: false,
            },
        ],
        [
            'postcss-preset-env',
            {
                browsers: 'last 2 version',
            },
        ],
    ],
};

module.exports = config;
