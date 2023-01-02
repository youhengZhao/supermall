import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })

    //发送网络请求
    return instance(config)
}