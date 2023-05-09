/*
 * @Author: fastfan
 * @Date: 2023-05-08 14:08:54
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-09 16:01:59
 * @Description: 遇到ts报错，有些时候是配置未生效，可以重启vscode或ts服务（vscode快捷键 ctrl+shift+p调出命令行，输入Restart TS Server）,
 * // 运行 yarn run type-check 即可查看文件是否有ts类型错误
 */
//声明window上自定义属性，如事件总线
declare interface Window {
    eventBus: any
}

//声明.vue文件
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<object, object, any>
    export default component
}

// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        // 是可选的
        isAdmin?: boolean
        // 每个路由都必须声明
        requiresAuth: boolean
    }
}
