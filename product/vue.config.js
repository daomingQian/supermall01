module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                assets: "@/assets",
                components: "@/components",
                network: "@/network",
                views: "@/views"
            }
        }
    },
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static'
}