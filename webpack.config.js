var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); //用作共用模块缓存 引用<script src="build/common.js"></script>

//可指定目录 以及 处理的文件
function build_entry_in_folder(path, types){
    var fs = require('fs'),
    __FILES = fs.readdirSync(path),
    __DEFAULTTYPE = types ? types : ['js'],
    entry = {};
    function filter(file){
        var flag = false,
        return_reg;
        __DEFAULTTYPE.forEach(function(_type){
            var reg =  new RegExp('\.' + _type + '$');
            if(reg.test(file)){
                flag = true;
                return_reg = reg;
                return false;
            }
        })
        return [flag, return_reg];
    }
    if(!__FILES.length) return entry;
    __FILES.forEach(function(file){
        var fileName,
        filterFile = filter(file);
        if(filterFile[0] && filterFile[1]){
            fileName = file.replace(filterFile[1], '');
            entry[fileName] = path + '/' + file;
        }
    })
    return entry;
}

module.exports = {
    entry: build_entry_in_folder('./build/js', ['js']),
    output: {
        path: './output',
        filename: '[name].js' // 模版基于上边 entry 的 key
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', query: { presets: ['es2015','react'] } },
        { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
        { test: /\.(css)$/, loader: 'style-loader!css-loader' },
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
      ]
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.js')
        extensions: ['', '.js', '.jsx', '.less', '.css']
    },
    plugins: [definePlugin, commonsPlugin]
};