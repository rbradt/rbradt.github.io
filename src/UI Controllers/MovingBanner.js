import {Component} from 'react';
import '../CSS/moving_banner.css';

class MovingBanner extends Component {
	constructor(props) {
		super(props);
	}

	banner(alt) {
		return (
			<div className="banner">
				<div className={"pane " + (alt? "right": "left")}>
					<div>RILEY BRADT </div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="banner-container">
				{this.banner(false)}
				<div className="main-scene">{this.props.scene}</div>
				{this.banner(true)}
			</div>
		);
	}
}

export {MovingBanner};