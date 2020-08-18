module.exports = {
    base: '/',
    title: '徐云舒的个人网站',
    description: '好好学习 天天向上',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            // { text: 'Vue', link: '/vue/' },
            // { text: '微信小程序', link: '/wechat/' },
            { text: '重学js', link: '/js/' }
        ],
        sidebar: {
            // '/vue/': [{
            //     title: 'Vue',
            //     collapsable: false,
            //     children: [
            //         { title: '基础', path: '/vue/basic' },
            //         { title: '进阶', path: '/vue/two' }
            //     ]
            // }],
            // '/wechat/': [{
            //     title: '微信小程序',
            //     collapsable: false,
            //     children: [
            //         { title: '壹', path: '/wechat/one' },
            //         { title: '贰', path: '/wechat/two' }
            //     ]
            // }],
            '/js/': [{
                title: '重学js',
                collapsable: false,
                children: [
                    '',
                    'basis',
                    'advance'
                ]
            }]
        },
        lastUpdated: '上次更新'
    },
    markdown: {
        lineNumbers: false // 为每个代码块显示行号
    }
}