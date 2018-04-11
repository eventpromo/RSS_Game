var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./client/js/index.js",
    output: {
        path: __dirname + "/client/build",
        filename: "bundle.js"
    },    
    module: {
        rules: [            
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,                
                use: {
                    loader: 'babel-loader'                    
                }
            }
        ]
    }
}