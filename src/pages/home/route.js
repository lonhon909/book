import PureComponent from '@/router/PureComponent.vue';
import RouteView from '@/router/RouteView.vue';
import CacheComponent from './view/cacheRoute/CacheComponent.vue';

export default [
    {
        path: '/echarts-pie',
        name: 'EchartPie',
        component: () => import(/* webpackChunkName: 'echartPie' */'./view/echart-pie.vue'),
    },
    {
        path: '/route-keep-alive',
        name: 'CacheRoute',
        component: () => import(/* webpackChunkName: 'cacheRoute' */'./view/cacheRoute/view.vue'),
        children: [
            // 多级路由缓存方法一：将路由扁平化处理，全部转化成二级
            {
                path: 'buy',
                name: 'CacheRouteBuy',
                component: () => import(/* webpackChunkName: 'cacheRouteBuy' */'./view/cacheRoute/buy/list.vue'),
                meta: {
                    keepAlive: true,
                },
            },
            {
                path: 'buy/detail',
                name: 'CacheRouteBuyDetail',
                component: () => import(/* webpackChunkName: 'cacheRouteBuyDetail' */'./view/cacheRoute/buy/detail.vue'),
            },
            // 方法二：使用 router-view 放置多级路由，仅在需要 缓存的那级 使用 keep-alive
            {
                path: 'shop',
                component: CacheComponent,
                redirect: 'shop/food',
                children: [
                    {
                        path: 'food',
                        name: 'ShopFood',
                        component: () => import(/* webpackChunkName: 'shopFood' */'./view/cacheRoute/shop/book/food.vue'),
                        meta: {
                            keepAlive: true,
                        }
                    },
                    {
                        path: 'food-detail',
                        name: 'ShopFoodDetail',
                        component: () => import(/* webpackChunkName: 'shopFoodDetail' */'./view/cacheRoute/shop/book/food.vue'),
                    },
                ]
            }
        ]
    },
    {
        path: '/vertical-align',
        name: 'VerticalAlignLineHeight',
        component: () => import(/* webpackChunkName: 'verticalAlignLineHeight' */'./view/vertical-align-line-height.vue')
    }
];