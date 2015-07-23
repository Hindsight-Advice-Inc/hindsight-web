import createActions from "util/action"
import {get, post} from 'axios'

export default createActions({
	search(query) {
		return (dispatch) => {
			get('advisor/search', {
				params : query
			}).then((response) => {
				dispatch({
					advisors : response.data
				})
			}).catch((...args) => {
				console.log(args)
			})
		}
	},
	refreshAdvisor(id) {
		return (dispatch) => {
			get("advisor/" + id).then((response) => {
				dispatch({
					advisor : response.data
				})
			}).catch((...args) => {
				console.log(args)
			})
		}
	},
	modifyAdvisor(advisor) {
		return (dispatch) => {
			dispatch({
				type : 'refreshAdvisor',
				advisor : advisor,
			})
		}
	}
});
