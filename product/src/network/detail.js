import request from "./api"

export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: "/recommend",
    })
}

export class GoodsInfo {
    constructor(itemInfo, columns, service) {
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.service = service
    }
}