const state = {
    paymentsList: {},
    activeList: [],
    categoryList: [],
    pages: 0,
    currentPage: 1,
    lastId: 0,
}
const getters = {
    getActiveList: state => {
        return state.activeList;
    },
    getNumbersOfPages: state => state.pages,
    getCurrentPage: state => state.currentPage,
    getCategoryList: state => state.categoryList,
    getLastId: state => state.lastId,
}

const mutations = {
    setPaymentsListData(state, payload) {
        state.paymentsList = payload;
    },
    setNumbersOfPages(state, number) {
        state.pages = number;
    },
    setActiveList(state, payload) {
      state.activeList = payload;
    },
    setPage(state, page) {
        state.currentPage = page;
    },
    setCategories(state, payload) {
        state.categoryList = payload;
    },
    setNewPay(state, newPay) {
        let pages = state.pages;
        if (state.paymentsList[`page` + pages].length === 5) {
            pages++;
            state.pages = pages;
            state.paymentsList['page' + pages] = [newPay];
        } else {
            state.paymentsList['page' + pages].push(newPay)
        }
    },
    setLastId(state) {
        let pages = state.pages;
        let number = state.paymentsList['page' + pages].length;
        state.lastId = state.paymentsList['page' + pages][number - 1].id;
    },
    setNewCategory(state, newCategory) {
        state.categoryList = [...state.categoryList, newCategory];
    }

}

const actions = {
    async fetchData({commit}) {
        let response = await fetch('https://raw.githubusercontent.com/toron2c/VueJS/a5261989296fc2431e498ea0d270328fbd8c3e7b/src/json/server.json')
        let data = await response.json();
        const result = [].concat(...Object.values(data))
        commit('setPaymentsListData', result[0])
        commit('setActiveList', result[0].page1);
        let pages = Object.keys(result[0]).length;
        commit('setNumbersOfPages', pages)
    },
    updateActiveList({commit}, page) {
      let newList = state.paymentsList[`page` + page];
      commit('setActiveList', newList);
      commit('setPage', page);
    },
    loadCategories({commit}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(['Food', 'Transport', 'Education', 'Entertainment'])
            }, 1000)
        })
            .then(res => {
                commit('setCategories', res)
            })
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
