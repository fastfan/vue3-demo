/*
 * @Author: fastfan
 * @Date: 2023-05-06 15:44:38
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-16 15:43:18
 * @Description: your description
 */
import request from '@/utils/request'
const pre_url = '/municipal'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadFile = (data: any) => {
    return request({
        url: `${pre_url}/api/file/uploadFile`,
        method: 'POST',
        data
    })
}

export function maintainPlanFindListByUser(data: unknown) {
    return request({
        url: `${pre_url}/api/maintainPlan/findListByUser`,
        method: 'post',
        data
    })
}

export function getIndicatorInformation(params: unknown) {
    return request({
        url: `${pre_url}/api/maintainStatisticalReport/getIndicatorInformation`,
        method: 'get',
        params
    })
}
export function maintainPlanDeleteById(data: unknown) {
    return request({
        url: `${pre_url}/api/expenseManagement/deleteById`,
        method: 'post',
        data
    })
}