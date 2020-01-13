module.exports = {
    configureWebpack: {

        resolve: {
            extensions: ['.js','.vue'],
            alias: {
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}