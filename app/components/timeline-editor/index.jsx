import 'timeline-editor/editor.css'
import React from 'react'
import Advisor from 'actions/advisor'

export default class WorkEditor extends React.Component {
	constructor() {
		super()
		this.state = {
			type : 'school'
		}
	}

	switchType = (e) => {
		this.setState({
			type : e.target.value,
		});
	}

	addEvent = () => {
		var payload = {}
		for(var key in this.refs) {
			var value = this.refs[key].getDOMNode().value
			var number = parseFloat(value)
			if(!isNaN(number))
				value = number
			payload[key] = value
		}
		Advisor.actions.addEvent(this.props.advisor, payload)
		this.props.onClose()
	}

	render() {
		const cx = React.addons.classSet({
			"timeline-editor" : true,
			"active" : this.props.active,
		})
		return (
			<section className={cx}>
				<i onClick={this.props.onClose}>×</i>
				<h1>Add Event</h1>
				<form>
					<h2>Type</h2>
					<select onChange={this.switchType} ref="type">
						<option value="school">School</option>
						<option value="employer">Employer</option>
						<option value="test">Test</option>
					</select>
					{this[this.state.type]()}
					<h2>Year</h2>
					<input ref="year" placeholder="Year" />
					<h2>Description</h2>
					<textarea ref="description" placeholder="Description..."></textarea>
				</form>
				<div className="button" onClick={this.add}>Add</div>
			</section>
		);
	}

	school() {
		return (
			<div>
				<h2>School</h2>
				<select ref="school">
					<option value="MIT">MIT</option>
					<option value="University of Pennsylvania">University of Pennsylvania</option>
				</select>
				<h2>Degree</h2>
				<select ref="degree">
					<option value="undergraduate">Undergraduate</option>
					<option value="graduate">Graduate</option>
				</select>
				<h2>Major</h2>
				<input ref="major" placeholder="Major" />
				<h2>GPA</h2>
				<input ref="gpa" placeholder="GPA" />
			</div>
		)
	}

	employer() {
		return (
			<div>
				<h2>Employer</h2>
				<input ref="employer" placeholder="Employer" />
				<h2>Position</h2>
				<input ref="position" placeholder="Position" />
			</div>
		)

	}

	test() {
		return (
			<div>
				<h2>Test</h2>
				<select ref="test">
					<option value="GMAT">GMAT</option>
					<option value="SAT">SAT</option>
				</select>
				<h2>Score</h2>
				<input ref="score" placeholder="Score" />
			</div>
		)
	}

}
