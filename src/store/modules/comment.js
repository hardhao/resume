import axios from 'axios'


const state = {
    all:{}
}


const mutations = {
    addName(state,name){
        state.all = name
    }
}

const actions = {
    fetchName({commit}){
        const uri = 'https://raw.githubusercontent.com/hardhao/resume/master/data/posts/index.json'
        axios.get(uri).then(res => {
            commit('addName',res.data.name)
            console.log('ddd')
        })
    }
}
export default {
    state,
    mutations,
    actions
}