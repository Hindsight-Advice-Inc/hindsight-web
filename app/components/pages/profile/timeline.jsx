import 'pages/profile/timeline.css'
import React from 'react/addons'
const Transition = React.addons.CSSTransitionGroup

export default class Timeline extends React.Component {
	render () {
		const { advisor } = this.props
		return (
			<Transition component="ul" transitionName="fade" transitionAppear={false} className="timeline">
			{

				[]
					.concat(advisor.school)
					.concat(advisor.test)
					.concat(advisor.employer)
					.sort(function(a,b) {
						return a.year<b.year?1:a.year>b.year?-1:0;
					}).map(function(item) {
						if (!item || item.id == -1)
							return false
						return (

							<li key={item.id}>
								<i className="circle"/>
								<h3>{item.year} <i className="close">×</i></h3>
								<h1>{item.school || item.test || item.employer}</h1>
								{item.gpa ? <h2>GPA: {item.gpa}</h2> : false}
								{item.major ? <h2>{item.major}</h2> : false}
								{item.score ? <h2>Score: {item.score}</h2> : false}
								{item.position ? <h2>{item.position}</h2> : false}
								<p>{item.description}</p>
							</li>
						)
				}.bind(this))
			}
			</Transition>
		)
	}
}
