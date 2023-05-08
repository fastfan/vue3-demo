/*
 * @Author: fastfan
 * @Date: 2023-05-06 15:14:54
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-08 14:54:12
 * @Description: your description
 */
import axios from 'axios'
// 创建axios实例
const service = axios.create({
    timeout: 305000, // 请求超时时间
    withCredentials: false // 表示跨域请求时是否需要使用凭证
})
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*'
function isJSON(val: any) {
    if (typeof val !== 'string') {
        return false
    }
    try {
        const obj = JSON.parse(val)
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            return true
        } else {
            return false
        }
    } catch (e) {
        return false
    }
}

service.interceptors.request.use(
    (config) => {
        // 使用store获取
        // config.headers['accessToken'] = 'f04e2ae9-56af-4ef1-b9f8-3d75922698cb'
        // config.headers['Authorization'] = 'f04e2ae9-56af-4ef1-b9f8-3d75922698cb'
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

// respone拦截器 处理数据
service.interceptors.response.use(
    (response) => {
        const { data } = response

        const resData = isJSON(data) ? JSON.parse(data) : data
        if (typeof resData === 'object') {
            return resData
        } else {
            // console.log(LogPrefix, "原始请求:")
            // 针对返回 res 是二进制数据流
            return response
        }
    },
    (error) => {
        // console.log('err' + error)// for debug
        return Promise.reject(error)
    }
)

export function request(_param: {
    [x: string]: any
    method?: 'get' | undefined
    responseType?: 'json' | undefined
    headers?: object | undefined
    url?: '' | undefined
    params: any
    data: any
}) {
    const {
        method = 'get',
        // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType = 'json', // 默认的
        headers = {},
        url = '',
        params,
        data,
        ...otherData
    } = _param

    if (!url) {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('url is null')
        })
    }
    const _method = method.toLowerCase()

    if (_method === 'get') {
        return axios({
            responseType,
            url,
            headers,
            method,
            params: params || data || otherData
        })
    }

    if (_method === 'post') {
        // 处理
        // if (!headers.hasOwnProperty('Content-Type')) {
        //   headers["Content-Type"] = "application/x-www-form-urlencoded"
        // }
        if (params && data) {
            return axios({
                responseType,
                url,
                headers,
                method,
                params,
                data
            })
        } else {
            const { start, limit, ...resetData } = otherData
            return axios({
                responseType,
                url,
                headers,
                method,
                params: params || { start, limit },
                data: data || resetData
            })
        }
    }
}

export default service
