const path = require('path');

var config = {
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
            }
        ]
    },
};

var projectCardConfig = Object.assign({}, config, {
    name: "project-card",
    entry: "./src/components/project-card/app.js",
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

var projectDetailPageConfig = Object.assign({}, config, {
    name: "project-detail",
    entry: "./src/components/project-detail-page/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "project-detail-page.js"
    },
});

module.exports = [
    projectCardConfig, projectDetailPageConfig,
];