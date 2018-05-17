import Vue from 'vue'
import Router from 'vue-router'
import Wrap from '@/components/Wrap'
import Resume from '@/components/Resume'
import Boke from '@/components/Boke'
import TextNode from '@/components/TextNode'
import MyPic from '@/components/MyPic'
import One from '@/components/One'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Wrap
        },
        {
            path: '/resume',
            component: Resume
        },
        {
            path: '/boke',
            component: Boke
        },
        {
            path: '/textnode',
            component: TextNode
        },
        {
            path: '/mypic',
            component: MyPic
        },
        {
            path: '/one',
            component: One
        }
    ],
    mode:'history'
})