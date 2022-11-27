import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: [

            // SidebarItem
            // 字符串 - 页面文件路径
            '/',
            {
                text: 'Foo',
                link: '/foo/',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                    // '/foo/bar.md',
                ],
            },

        ],
    }),

})