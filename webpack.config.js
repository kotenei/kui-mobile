const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./app/index.jsx"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)/,
                use:
                    "url-loader?limit=1000&name=fonts/[name].[ext]&publicPath=../"
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: "url-loader?limit=1000&name=images/[name].[ext]"
            },
            {
                test: /\.md$/,
                use: "raw-loader"
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "-",
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: "vendors"
                },
                "kui-mobile": {
                    test: /[\\/]src[\\/]/,
                    priority: -20,
                    name: "kui-mobile"
                }
            }
        },
        runtimeChunk: "single"
    },
    resolve: {
        alias: {
            "kui-mobile": path.resolve(__dirname, "src")
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebPackPlugin({
            template: "./app/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].min.css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 3008,
        host: "localhost"
        //hot: true
    }
};
