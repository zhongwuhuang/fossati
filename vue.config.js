// 基础路径 注意发布之前要先修改这里
let baseUrl = ''
module.exports = {
    publicPath: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: true,
    // devServer: {
    //     publicPath: baseUrl // 和 baseUrl 保持一致
    // },
    productionSourceMap: false,
    //配置转发代理
    devServer: {
        port: 8888, // 端口号
        host: '0.0.0.0',
        hotOnly: true,
        https: false, // https:{type:Boolean}
        open: true, // 配置自动启动浏览器
        proxy: {
            '/ajax' :{
                target: "http://fossati1967.com:8800/api",//凡是以ajax开始的请求都代理到这个地址
                ws: true,
                changeOrigin: true,  //
                pathRewrite: {
                  '^/ajax': ''
                }            
            }
        }        
    },
}