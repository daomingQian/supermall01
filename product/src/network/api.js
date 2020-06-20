import axios from "axios"

export default function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000/api/n3",
        timeout: 50000
    })
    instance.interceptors.response.use(
        res=>{
            return res
        },
        error => {
            console.log(error)
        }
    )
    return instance(config)
}