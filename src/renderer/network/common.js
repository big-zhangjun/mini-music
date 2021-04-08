
import AJAX from './request'
import { HOST } from './config'

// 手机号登录
export const cellPhone = (data) => AJAX.post(`${HOST}/login/cellphone`, data)

