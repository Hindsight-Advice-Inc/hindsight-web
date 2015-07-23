import 'pages/profile/profile.css'
import React from 'react/addons'
import { connect } from 'react-redux'
import Advisor from 'actions/advisor'

import TimelineEditor from 'timeline-editor'
import Timeline from 'pages/profile/timeline'

@connect((stores) => {
	return {
		advisor : stores.advisor
	}
})
export default class Profile extends React.Component {

	constructor() {
		super()
		this.state = {
			editor : false
		}
	}

	componentDidMount() {
		const { dispatch, params } = this.props
		dispatch(Advisor.refreshAdvisor(params.id))
	}

	render() {
		const { params } = this.props
		const advisor = this.props.advisor.cache[params.id]
		if(!advisor)
			return false

		const editable = true;
		const cx = React.addons.classSet({
			profile : true,
			content : true,
			editable: true,
		})

		return (
			<section className={cx}>
				<TimelineEditor onClose={this.toggleEditor} active={this.state.editor} />
				<div className='left card'>
					<div className="wrap">
						<img src={advisor.image || "https://images.blogthings.com/thecolorfulpatterntest/pattern-4.png"}/>
						<h1>
							<span contentEditable={editable} className="pencil"  onBlur={this.modify.bind(this, advisor, 'name')}>{advisor.name}</span>
						</h1>
						<h2>{advisor.education.school}</h2>
						<h3>{advisor.education.major}</h3>
						{/*<div onClick={Request.actions.target.bind(this, advisor)} className="button">Request</div>*/}
					</div>
				</div>
				<div className='center'>
					<div className='card'>
						<h1>Story</h1>
						<div className="pad">
							<h2>About Me</h2>
							<p onBlur={this.modify.bind(this, advisor, 'story')} contentEditable={editable} className="pencil">{advisor.story || "No description"}</p>
							<h2 onClick={this.toggleEditor} className="pencil">Timeline</h2>
							<Timeline  advisor={advisor} />
							<h2>Skills</h2>
							<ul className="skills">
								<li>
									<div className="count">72</div>
									<h1>My favorite skill</h1>
								</li>
								<li>
									<div className="count">30</div>
									<h1>My Other Skill</h1>
								</li>
								<li>
									<div className="count">2</div>
									<h1>Not too great at this one</h1>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}

	toggleEditor = () => {
		this.setState({
			editor : !this.state.editor
		})
	}

	modify = (advisor, field, e) => {
		const { dispatch } = this.props
		advisor[field] = e.target.innerHTML
		dispatch(Advisor.modifyAdvisor(advisor))
	}

}
