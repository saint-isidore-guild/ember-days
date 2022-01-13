import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fall: new Date(),
        winter: new Date(),
        spring: new Date(),
        summer: new Date()
    },
    getters: {
        fall: state => {
            return state.fall
        },
        winter: state => {
            return state.winter
        },
        spring: state => {
            return state.spring
        },
        summer: state => {
            return state.summer
        }
    },
    mutations: {
        setFall(state, fallDate) {
            state.fall = fallDate;
        },
        setWinter(state, winterDate) {
            state.winter = winterDate;
        },
        setSpring(state, springDate) {
            state.spring = springDate;
        },
        setSummer(state, summerDate) {
            state.summer = summerDate;
        }
    }
});