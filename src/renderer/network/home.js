import AJAX from './request'
import { HOST } from './config'

// 获取首页banner
export const getBannerList = (data) => AJAX.get(`${HOST}/banner`, data)

// 获取首页图标
export const getDragonBall = (data) =>
	AJAX.get(`${HOST}/homepage/dragon/ball`, data)

// 获取推荐歌单
export const getPersonalized = (data) => AJAX.get(`${HOST}/personalized`, data)

// 获取推荐歌单(需要登录)
export const getRecommendResource = (data) =>
	AJAX.get(`${HOST}/recommend/resource`, data)
