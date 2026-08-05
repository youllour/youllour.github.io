import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
    url: 'https://youllour.github.io/',  //你网站的URL
    favicon: "/images/icon.png",	// 网页图标链接
    lang: 'zh-CN',  //默认语言
    title: "spark_ovo的小站",  //网站标题
    subtitle: '在我们身上造成黑夜的，也可能留下一些星星给我们。',//网站副标题
    author: {
        name: 'spark_ovo',//博主名称
        avatar: "/images/1.png",	//头像链接
        status: {
            emoji: '💛'	// 头像旁边的emoji
        },
    },

    description: '欢迎来到我的博客！☆⌒(*＾-゜)v THX!!',  //简介
    social: [
        {
            name: 'RSS',
            link: '/atom.xml',  //这个是博客自带的RSS订阅，尽量留着，方便其他博友为你订阅
            icon: 'i-ri-rss-line',
            color: 'orange',
        },
        {
            name: 'GitHub',
            link: 'https://github.com/youllour',  //这里填写你的GitHub地址，不需要的话删除此字段即可
            icon: 'i-ri-github-line',
            color: '#6e5494',
        },
        {
            name: '哔哩哔哩',
            link: 'https://space.bilibili.com/361515508?spm_id_from=333.1007.0.0',  //这里填写你的BiliBili地址，不需要的话删除此字段即可
            icon: 'i-ri-bilibili-line',
            color: '#FF8EB3',
        },
        {
            name: 'E-Mail',
            link: 'mailto:2669217803@qq.com', //这里在mailto后面填写你的Email地址，不需要的话删除此字段即可
            icon: 'i-ri-mail-line',
            color: '#8E71C1',
        },
    ],

    search: {
        enable: true,
    },
    comment: {
        enable: true
    },
    statistics: {
        enable: true,
        readTime: {
            /**
             * 阅读速度
             */
            speed: {
                cn: 300,
                en: 200,
            },
        },
    },

})