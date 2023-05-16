/*
 * @Author: fastfan
 * @Date: 2023-05-16 13:59:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-05-16 16:39:06
 * @Description: your description
 */
import { ElMessage, ElMessageBox } from 'element-plus'
type ParamsConfig = {
    title: string;
    text: string;
    type: any;
    id: string | Number;
    func: any
}
export const useDelete = async (params: ParamsConfig) => {
    try {
        await ElMessageBox.confirm(
            params.text,
            params.title,
            {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: params.type,
                draggable: true
            }
        ).then(async () => {
            const { success } = await params.func({ id: params.id })
            if (success)
                ElMessage({
                    type: 'success',
                    message: 'Delete completed',
                })
        })
    } catch {
        ElMessage({
            type: 'info',
            message: 'Delete canceled',
        })
    }
}