import axios from 'axios'


const state = {
    all:{}
}


const mutations = {
    addName(state,user){
        state.all = user
    }
}

const actions = {
    fetchName({commit}){
        const uri = 'https://raw.githubusercontent.com/hardhao/resume/master/data/posts/index.json'
        axios.get(uri).then(res => {
            commit('addName',res.data)
            console.log(res.data)
        })
    }
}
export default {
    state,
    mutations,
    actions
}