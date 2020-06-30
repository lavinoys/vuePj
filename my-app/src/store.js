// 스토어 만들기
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        // 카운트 업하는 뮤테이션 등록하기
        increment(state) {
            state.count++
        }
    }
})
export default store