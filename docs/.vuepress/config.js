
const genSidebar = require('./utils/genSidebar.js');

/* 生成侧边栏配置 */
var sidebar = {
    '/pages/article/': genSidebar.genDefaultSidebar('pages/article', '常见问题test', '知识库', true, 2),
    /* fallback 侧边栏必须最后定义，否则会导致侧边栏无法使用 */
    '/': ['']
}

module.exports = {
    host:'localhost',
    port:'8080',
    title: 'python-go', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'python转go学习', // meta 中的描述文字，用于SEO
    // dest:'docs',

    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ]
    ],
    // sidebarDepth: 2,
    themeConfig: {
        logo: '/favicon.ico', //网页顶端导航栏左上角的图标
        nav: [
            // { text: '和作者做同事', link: '/join_us' },
            { text: '首页', link: '/' },
            {
                text: '分类',  //默认显示
                ariaLabel: '分类',   //用于识别的label
                items: [
                    { text: '文章', link: '/pages/article/test1.md' },
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: '琐碎', link: '/pages/folder2/test4.md' },
                ]
            },

            {text: '文档', items: [
                    {text: 'Python菜鸟', link: 'https://www.runoob.com/python3/python3-tutorial.html'},
                    {text: 'Go菜鸟', link: 'https://www.runoob.com/go/go-tutorial.html'},
                    {text: '快速上手', link: 'https://github.com/example/NetAxea'},
                ]},
            {text: 'Django', link: 'https://docs.djangoproject.com/zh-hans/3.2/'},
            {text: 'Gin', link: 'https://www.topgoer.com/gin%E6%A1%86%E6%9E%B6/'},
        ],
        sidebar:sidebar,
    }
}

