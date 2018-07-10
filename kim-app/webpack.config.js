var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('Clean-Webpack-Plugin');

module.exports={
    entry: './dd.js',
    output:{
        path: path.resolve(__dirname, './out'),
        publicPath : '/out/',
        filename : 'app.js'
    },
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      },
      plugins: [
        new CleanWebpackPlugin(['/out/kim.js']),
        new HtmlWebpackPlugin({
          
            template: './ddd.html',
            chunks: ['css', 'index', 'app', 'system', 'monitor']
        }),
     
      
    ],
    devServer: {
        host : '127.0.0.1',
        contentBase: path.join(__dirname, "./out"),
        compress: true,
        hot : true,
        inline: true,
        port: 9000,
        open : true
      },

    module: {

        rules:[
           {
               test:/\.vue$/,
               loader : 'vue-loader',
               options: {
                   loaders:{

                   }
               }
           },
           {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
           },
           {
               test:/\.js$/,
               loader:'babel-loader',
               exclude:/node_modules/,
               query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
               
           },
           {
               test:/\.(png|jpg|gif|svg)$/,
               loader:'file-loader',
               options:{
                   name:'[name].[ext]?[hash]'
               }
           },
           {
                test:/\.ejs$/,
                loader:'ejs-loader?variable=data'
           },
           {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
           }
        ]
    }, 
}