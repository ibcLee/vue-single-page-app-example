var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var uglyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

module.exports = {
    entry:'./main.js',
    output:{
        path:'build',
        publicPath:'/build/',
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=81920'
            }
        ]
    },
    plugins:[uglyPlugin]
}