const path=require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin')//导入 在内存中自动生成index页面的插件
// 创建一个插件的实例对象

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),//原文件
    filename: 'index.html' //内存中首页的名字
})
//向外暴露一个打包的配置对象; node语法
//webpack 默认只能打包处理 .js 后缀名类型的文件 像.png .vue无法处理 要配置第三方loader
module.exports={
    mode: 'production',  //production 和 development
    //webpack 4.x 中 约定大于配置
    //WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB)警告解决
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins:[
        htmlPlugin
    ],
    module:{    //第三方模块的配置规则  
        rules:[
            {test: /\.js|jsx$/, use: 'babel-loader',exclude: /node_modules/}
        ]
    },
    resolve:{
        extensions:['.js','.jsx', '.json'],
        //别名
        alias:{
            '@': path.join(__dirname,'./src')
        }
    }   
}



//es6向外导出模块
// export default {

// }
//es6导入
// important * from ''