import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'


// add icons what you will need

const safelist = [
    'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
    // site config see site.config.ts

    theme: 'yun',

    themeConfig: {
        banner: {
            enable: true,
            title: '白日梦',
        },
        pages: [
            {
                name: '网络世界的小伙伴们',
                url: '/links/',
                icon: 'i-ri-open-arm-line',  //这里的icon是Valaxy自带的图标，你可以在https://icones.js.org/找到你需要的图标，然后复制到icon字段中
                //这里的ico我踩过坑，所以多说两句，这里的ICO复制名字即可，但是你需要在前面添加i-ri-【ICO名字】
                color: 'hotpink',
            },
            {
                name: '分类',
                url: '/categories/',
                icon: 'i-ri-apps-line',
                color: 'dodgerblue',
            },
            {
                name: '标签',
                url: '/tags/',
                icon: 'i-ri-bookmark-3-line',
                color: 'dodgerblue',
            },
        ],
        colors: {
            primary: "#D69B54",
        },
        //页脚
        footer: {
            since: 2023,
            powered: true, //这里是显示Valaxy驱动信息的，尊重作者劳动成果，我选择开启
            beian: {
                enable: false,
                icp: '',  //这里是备案号，如果你不需要备案号，可以将上面的enable改为false即可
            },
        },

        //背景图,这里为我自己添加的字段
        bg_image: {
            enable: true,  //这里是背景图的设置，你可以设置白日模式和夜间模式的背景图，如果你不需要背景图，可以将上面的enable改为false即可
            url: "/images/1730014557261.jpg",	// 白日模式背景
            dark: "/images/e1a0c1adcbbbe143903ed8e86912a03f256667467.jpg",	// 夜间模式背景
        },

        //鼠标点击烟花特效
        fireworks: {
            enable: true,
            colors: ['#FFE57D', '#FFCD88', '#E6F4AD']
        },

    },
    unocss: { safelist },
    siteConfig: {
        // 启用评论
        comment: {
            enable: false  //这里是评论的设置，如果你不需要评论，可以将enable改为false即可
        },
    },
})

