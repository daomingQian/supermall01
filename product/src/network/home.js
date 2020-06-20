import request from "./api"


//轮播图和推荐图数据
export function getHomeData() {
    return request({
        url: "home/multidata"
    })
}
//
export function getHomeType(type,page) {
    return request({
        url: "home/data",
        params: {
            type:type,
            page:page
        }
    })
}