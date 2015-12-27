
var webpack = require('webpack');
var path = require('path');

module.exports = 
    {
        name: "browser",
        entry: {
                main:'./src/index.js',
                    'vendor-bundle1': [ 
                                'bootstrap-webpack!./bootstrap.config.js', 
                                './src/vendor/spin.min.js', 
                                './src/vendor/ladda.min.js', 
                                './src/vendor/ie10-viewport-bug-workaround.js', 
                                './src/vendor/ie-emulation-modes-warning.js'
                                ]
        },
        output: {
            path: './public/js/',
            filename: 'bundle.js',
            publicPath: '/public/'
        },
        debug: true,
        devtools: 'sourceMap',
        resolve: {
            alias: {
                jquery: path.resolve(__dirname, 'src/', 'vendor', 'jquery-1.11.3.min.js')
            }
        },
        module: {
            preLoaders: [
                  {
                    test: /\.js?$/,
                    loaders: ['jshint'],
                    include: './src/[name].js'
                  }
                ],
            loaders: [
                // { test: /\.(html)$/, loader: 'file-loader?name=./[name].html!./src/[name].[ext]' },
                { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
                { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
                { test: /\.css$/, loader: 'style-loader!css-loader' }, //, include: path.join(__dirname, 'src/css')},
                { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
            ]
        },
        externals: {},
        plugins: [
            
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            //new HtmlwebpackPlugin({ title: 'Kanban app' }),
            new webpack.optimize.CommonsChunkPlugin({ 
                                                        name: "vendor-bundle1", 
                                                        chunks: ['bundle1'],
                                                        filename: "vendor-bundle.js",
                                                        minChunks: Infinity
                                                    })
        ],
        devServer: {
            historyApiFallback: true,
            //historyApiFallback: {
            //     index: 'default.html',
            //     rewrites: [
            //       { from: /\/soccer/, to: '/soccer.html'}
            //     ]
            //   },
            hot: true,
            inline: true,
            progress: true,
            watchPoll: true,
            // display only errors to reduce the amount of output
            stats: 'errors-only',
            contentBase: 'public/',
            outputPublicPath: './public/js/',
            // parse host and port from env so this is easy
            // to customize
            port: 8000, //process.env.PORT,
            // Example of how to add domain and authentication using config file
            proxy: {
                //'/some/path*': {
                //target: 'https://other-server.example.com',
                //secure: false,
                }
            }
        }
     




