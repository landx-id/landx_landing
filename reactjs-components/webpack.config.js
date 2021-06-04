const path = require('path');

let config = {
    // mode: "development",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
};

let projectCardConfig = Object.assign({}, config, {
    name: "project-card",
    entry: "./pages/project-card.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "project-card.js"
    },
    devServer: {
        contentBase: "../",
        publicPath: "/",
        compress: true,
        port: 8099
    },
});

let projectDetailPageConfig = Object.assign({}, config, {
    name: "project-detail",
    entry: "./pages/project-detail-page.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "project-detail-page.js"
    },
});

module.exports = [
    projectCardConfig, projectDetailPageConfig,
];