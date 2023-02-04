import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: () => ({
			color: "#000000"
		}),
		mutations: {
			setColor(state, color) {
				state.color = color
			}
		},
		actions: {
			setColor(context, color) {
				context.commit("setColor", color)
			}
		},
		getters: {
			color(state) {
				return state.color
			}
		}
	})
}

export default createStore