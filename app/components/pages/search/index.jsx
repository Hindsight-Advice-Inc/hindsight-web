import 'pages/search/search.css'
import React from 'react'
import { connect } from 'react-redux'
import Filters from 'pages/search/filters'
import AdvisorList from 'advisor-list'
import Advisor from 'actions/advisor'

@connect((stores) => {
	return {
		advisor : stores.advisor
	}
})
export default class Search extends React.Component {

	componentWillMount() {
		const { dispatch } = this.props
		dispatch(Advisor.search())
	}

	render() {
		const advisors = this.props.advisor.search.map((id) => {
			return this.props.advisor.cache[id]
		})

		return (
			<section className="search">
				<div className="content">
					<Filters onSearch={this.onSearch} />
					<AdvisorList advisors={advisors}  />
				</div>
			</section>
		);
	}

	onSearch = (payload) => {
		const { dispatch } = this.props
		dispatch(Advisor.search(payload))
	}

}
