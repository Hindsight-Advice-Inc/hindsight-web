import './advisor-list.css'
import React from 'react/addons'
import { Link } from 'react-router'
const Transition = React.addons.CSSTransitionGroup;

export default class AdvisorList extends React.Component {
	render() {
		if(!this.props.advisors)
			return false
		return (
			<Transition component="ul" transitionName="fade" transitionAppear={true} className="advisor-list">
			{
				this.props.advisors.map((advisor) => {
					return (
						<li key={advisor.id} className="card">
							<div className="top">
								<img src={advisor.image || "https://images.blogthings.com/thecolorfulpatterntest/pattern-4.png"} />
								<div className="details">
									<h1>{advisor.name}</h1>
									<h2>{advisor.education.school}</h2>
									<h3>{advisor.education.major}</h3>
								</div>
								<ul className="stats">
								{
									advisor.test.map((test) => {
										return (
											<li key={test.id}>
												<h1>{test.score}</h1>
												<h2>{test.test}</h2>
											</li>
										)
									})
								}
								</ul>
							</div>
							<div className="toolbar">
								<Link className="profile" to={"/profile/" + advisor.id } />
								{/*<a onClick={Request.actions.target.bind(this, advisor)}></a>*/}
							</div>
						</li>
					)
				})
			}
			</Transition>
		)
	}
}
