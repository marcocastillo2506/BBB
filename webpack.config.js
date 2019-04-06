const path = require('path');

module.exports = {
 entry: [
   './public/react/index.jsx'
 ],
 output: {
   filename: 'bundle.js',
   path: path.join(__dirname, 'public/src')
 },
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       use: [
         'babel-loader'
       ],
       exclude: /node_modules|packages/,
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
     }
   ],
 },
 resolve: {
   extensions: ['.js', '.jsx']
 }
};
