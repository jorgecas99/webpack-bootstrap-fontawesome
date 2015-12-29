
var webpack = require('webpack');
var path = require('path');

module.exports = 
    {
        name: "browser",
        entry: {
                javascript:'./src/index.js',
                    'vendor-bundle1': [ 
                                'bootstrap-webpack!./bootstrap.config.js',
                                'font-awesome-webpack!./font-awesome.config.js',
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
                // { test: /\.(html)$/, loader: 'file-loader' },
                { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
                { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
                { test: /\.css$/, loader: 'style-loader!css-loader' }, //, include: path.join(__dirname, 'src/css')},
                { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
                
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

            ]
        },
        externals: {},
        plugins: [
            
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            //new HtmlwebpackPlugin({ title: 'app' }),
            new webpack.optimize.CommonsChunkPlugin({ 
                                                        name: "vendor-bundle1", 
                                                        chunks: ['bundle1'],
                                                        filename: "vendor-bundle.js",
                                                        minChunks: Infinity
                                                    })
        ],
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            watchPoll: true,
            // display only errors to reduce the amount of output
            stats: 'errors-only',
            contentBase: 'public/',
            outputPublicPath: './public/js/',
            historyApiFallback: {
                index: 'home.html',
                rewrites: [
                  { from: /\/soccer/, to: '/soccer.html'},
                  { from: /\/another/, to: '/another.html'}
                ]
            },
            port: 8000, 
            // Example of how to add domain and authentication using config file
            proxy: {
                //'/some/path*': {
                //target: 'https://other-server.example.com',
                //secure: false,
                }
            }
        }
     




