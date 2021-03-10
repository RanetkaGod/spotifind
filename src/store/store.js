import Vue from 'vue'
import Vuex from 'vuex'
import SpotifyAuth from "@/store/SpotifyAuth";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        SpotifyAuth: SpotifyAuth
    },
    state: {
        foundResults: null,
        filters: {
            acousticness: null, // Акустическая ли композиция (от 0.0 до 1.0)
            danceability: null, // Танцевальная ли композиция (от 0.0 до 1.0)
            // duration_ms: null, // Продолжительность (миллисекунды)
            energy: null, // Энергичность трека (от 0.0 до 1.0)
            instrumentalness: null, // Инструментальная ли музыка (от 0.0 до 1.0 (0.5 и выше точно инструменталы))
            liveness: null, // Является ли запись "лайвом" (от 0.0 до 1.0 (0.8 и выше значит, что это лайв))
            speechiness: null, // Как много речи в композациях (от 0.0 до 1.0 (менее 0.33 - композиция без слов, от 0.33 до 0.66 - и речетатив и музыка, 0.66 и более - речетатив))
            tempo: null, // Темп копозиции (BPM)
            valence: null, // Валентность трека (от 0.0 до 1.0 (Означает "музыкальный позитивизм" композиции, чем выше, тем композиция более позитивная))
            // popularity: null, // Популярность трека (от 0 до 100 (100 - наиболее популярный))

            // No access by user
            // key: null, // Ноты, используемые в композиции (таблицу смотреть)
            // time_signature: null, // Количество битов в каждом такте (любое целое)
            // mode: null, // Мажорность/минорность (1 - мажор, 2 - минор)
            // loudness: null, // Громкость композиции (в децибеллах от -60 до 0)

            // Добавить target на return-е
        },
        activeTrack: null,
        loading: {
            search: false,
            recs: false
        },
        recommendations: null,
        searchInputFocused: false
    },
    mutations: {
        updateResults(state, data) {
            state.foundResults = data
        },
        setFilterValuesByKey(state, {key, value}) {
            state.filters[key] = value
        },
        changeFilterValuesByKey(state, {key, value}) {
            state.filters[key] = value
            // запрос на серв
        },
        chooseActiveTrack(state, track_id) {
            state.activeTrack = track_id
        },
        changeLoadingState(state, {component, isLoading}) {
            state.loading[component] = isLoading
        },
        updateRecomendations(state, recomendations) {
            state.recommendations = recomendations
        },
        searchInputFocus(state, condition) {
            state.searchInputFocused = condition
        },
    },
    actions: {
        updateResults({commit}, data) {
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                commit('updateResults', data)
                resolve()
            })
        },
        setFilterValuesByKey({commit}, [key, value]) {
            commit('setFilterValuesByKey', {key, value})
        },
        changeFilterValuesByKey({commit}, [key, value]) {
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                commit('changeFilterValuesByKey', {key, value})
                resolve()
            })
        },
        chooseActiveTrack({commit}, track_id) {
            commit('chooseActiveTrack', track_id)
        },
        changeLoadingState({commit}, payload) {
            commit('changeLoadingState', payload)
        },
        updateRecomendations({commit}, recomendations) {
            commit('updateRecomendations', recomendations)
        },
        searchInputFocus({commit}, condition) {
            commit('searchInputFocus', condition)
        }
    }
})
// Разобъем на модули в будущем
export default store
