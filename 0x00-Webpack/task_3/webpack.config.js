const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: {
            import: './modules/header/header.js',
            dependOn: 'shared',
        },
        body: {
            import: './modules/body/body.js',
            dependOn: 'shared',
        },
        footer: {
            import: './modules/footer/footer.js',
            dependOn: 'shared',
        },
        shared: 'jquery',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './public'),
        port: 8564,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            filename: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
