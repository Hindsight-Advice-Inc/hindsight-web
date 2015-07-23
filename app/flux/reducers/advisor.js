import createStore from "util/store"

function cache(state, advisors) {
	const next = {
		...state,
	}
	const ids = advisors.map((advisor) => {
		advisor.education = advisor.school[0]
		next.cache[advisor.id] = advisor
		return advisor.id
	})
	return {
		next,
		ids,
	}
}

export default createStore({
	search : [],
	cache : {},
}, {

	search(state, action) {
		const { next, ids } = cache(state, action.advisors)
		next.search = ids
		console.log(next)
		return next
	},

	refreshAdvisor(state,action) {
		const { next } = cache(state, [action.advisor])
		return next
	}

});
