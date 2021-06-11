const path = require('path');
const glob = require('glob');

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

pages = glob.sync("./pages/*.js")
entryPages = {}
for (const page of pages) {
    let name = page.split('/')[2].split('.')[0]
    entryPages[name] = page;
}

let pagesConfig = Object.assign({}, config, {
    name: "page",
    entry: entryPages,
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: "../",
        publicPath: "/",
        compress: true,
        port: 8099
    },
});

module.exports = [
    pagesConfig
];
