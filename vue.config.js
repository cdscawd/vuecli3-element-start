
// https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
var webpack = require('webpack') //引入webpack库
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //引入webpack-bundle-analyzer

module.exports = {
	publicPath: '/',
	// publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
	outputDir: 'dist',
	productionSourceMap: false,
	// https://blog.csdn.net/qq_31061615/article/details/87939627
	chainWebpack: config => {
		config.plugin('ignore')
			.use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));	//去除locale所有文件
		config.plugin('analyzer')
			.use(new BundleAnalyzerPlugin())//webpack-bundle-analyzer 生成报表
	},
	
}