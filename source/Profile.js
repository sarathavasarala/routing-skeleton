import React from 'react'
import profile__thumb from '../assets/profile.jpg'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import b5 from '../assets/b5.png'
import b6 from '../assets/b6.png'

export default React.createClass({
  getInitialState(){
  	return {areBadgesHidden:true}
  },
  toggleBadgeVisibility(){
  	this.setState({areBadgesHidden:!this.state.areBadgesHidden})
  },
  renderShowMore(){
	return (<div className="profile__badge-slider" onClick={this.toggleBadgeVisibility}>
		Show Recent Badges <i className="fa fa-caret-down"></i>
	</div>)
  },
  renderShowLess(){
	return (<div>
				<div className="profile__badge-slider active">
					<div className="profile__badge-container">
						<img src={b1} alt="badge"/>
						<div><strong> Cartographer </strong></div>
					</div>
					<div className="profile__badge-container">
						<img src={b2} alt="badge"/>
						<div><strong> Full Signal </strong></div>
					</div>
					<div className="profile__badge-container">
						<img src={b3} alt="badge"/>
						<div><strong> Loquacious </strong></div>
					</div>
					<div className="profile__badge-container">
						<img src={b4} alt="badge"/>
						<div><strong> On Fire </strong></div>
					</div>
					<div className="profile__badge-container">
						<img src={b5} alt="badge"/>
						<div><strong> Beginner </strong></div>
					</div>
					<div className="profile__badge-container">
						<img src={b6} alt="badge"/>
						<div><strong> Superstar </strong></div>
					</div>
				</div>
				<div className="profile__badge-slider" onClick={this.toggleBadgeVisibility}>
					Hide Recent Badges <i className="fa fa-caret-up"></i>
				</div>
			</div>
		)
  },
  render() {
    return (
			<div className="profile__container">
				<div className="profile__userDetails">
    				<img className="profile__picture rounded-circle" 
    					src= {profile__thumb} 
    					alt="Profile Pic"/>

    				<div className="profile__details">
    					<div className="profile__name"> Dorian Gray </div>
    					<div> 2332 Points </div>
    					<div className="profile__badges">
    						<div> <i className="fa fa-address-card-o fa-fw"></i> Top Quiz Creator </div>
    						<div> <i className="fa fa-address-card-o fa-fw"></i> Top Quiz Taker </div>
    					</div>
    				</div>
					<div className="profile__buttons">
    					<div className="btn btn-sm btn-outline"> <i className="fa fa-user-plus fa-fw"></i> Add as Friend </div>
    					<div className="btn btn-sm btn-outline"> <i className="fa fa-cog fa-fw"></i> Options <i className="fa fa-caret-down"></i></div>
					</div>
    				<div className="profile__scrim"></div>

    				<div className="profile__connections">
    					<div>
    						<strong>200</strong> Followers    						
    					</div>
    					<div>
    						<strong>122</strong> Following    						
    					</div>
    				</div>
    			</div>


				{ 
					this.state.areBadgesHidden ? 
					this.renderShowMore() : 
					this.renderShowLess()
				}
			</div>
    	)
  }
})