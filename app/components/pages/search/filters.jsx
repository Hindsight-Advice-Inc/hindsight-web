import './filters.css'
import React from 'react'
import * as _ from 'lodash'

const options = {
	degree : [
		"undergraduate",
		"graduate",
	],
	school : [
		"MIT",
		"University of Pennsylvania",
	]
}

export default class Filters extends React.Component {

	onChange = () => {
		const { dispatch } = this.props
		const payload = {}
		for (var key in this.refs) {
			const node = this.refs[key].getDOMNode()
			const value = node.value
			if(!value)
				continue
			payload[key] = node.value
		}
		this.props.onSearch(payload)
	}

	render() {
		return (
			<section className="filters">
				<div className="wrap">
				<h1>Filters</h1>
					<form>
					{
						_.map(options, (values, key) => {
							return (
								<span key={key}>
								<h2>{key}</h2>
								<select onChange={this.onChange} ref={key}>
								{
									[""].concat(values).map(function(value) {
										return <option key={value} value={value}>{value || "Any"}</option>
									})
								}
								</select>
								</span>
							)
						})
					}
					</form>
				</div>
			</section>
		);
	}

}
