import Vue from "vue"
const requireContext = require.context("./",true,/\.vue$/)
requireContext.keys().forEach(filename=>{
    const route = requireContext(filename)
    Vue.component(route.default.name,route.default)
})