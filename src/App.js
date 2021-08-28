import logo from './logo.svg';
import {Component} from 'react';
import {Home} from './UI Controllers/Home';
import {GameSelect} from './UI Controllers/GameSelect';
import {MovingBanner} from './UI Controllers/MovingBanner';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHome } from '@fortawesome/free-solid-svg-icons';
import './CSS/App.css';
import './CSS/nav.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {scene: 'nav_home'};
		library.add(faHome);
	}

	setScene(newScene) {
		if(this.state.scene !== newScene)
			this.setState({scene: newScene});
	}

	renderScene(scene) {
		let sceneToRender;

		switch(scene) {
			case 'nav_ttt':
				sceneToRender = <GameSelect game="ttt" />;
				break;
			case 'nav_chess':
				break;
			case 'nav_coming':
				break;
			case 'nav_login':
				break;
			case 'nav_support':
				break;
			case 'nav_about':
				break;
			case 'nav_home':
				sceneToRender = <Home />;
				break;

			default:
				sceneToRender = (<MovingBanner scene={
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>
								Edit <code>src/App.js</code> and save to reload.
							</p>
							<a
								className="App-link"
								href="https://reactjs.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn React
							</a>
						</header>
					</div>
				} />);
		}

		return sceneToRender;
	}

	render() {
		return (
			<div className="nav-container">
				<div id="nav" className="nav-panel">
					<button id="nav_home" className="nav-button nav-icon" aria-label="Home" style={{height: 45, width: 75, padding: (13, 20)}} onClick={() => this.setScene('nav_home')}><FontAwesomeIcon icon="home" /></button>
					<button id="nav_ttt" className="nav-button" onClick={() => this.setScene('nav_ttt')}>Tic-Tac-Toe</button>
					<button id="nav_chess" className="nav-button" onClick={() => this.setScene('nav_chess')}>Chess</button>
					<button id="nav_coming" className="nav-button" onClick={() => this.setScene('nav_coming')}>Projects</button>
					<button id="nav_login" className="nav-button" style={{float: "right"}} onClick={() => this.setScene('nav_login')}>Login</button>
					<button id="nav_support" className="nav-button" style={{float: "right"}} onClick={() => this.setScene('nav_support')}>Support</button>
					<button id="nav_about" className="nav-button" style={{float: "right"}} onClick={() => this.setScene('nav_about')}>About</button>
				</div>
				<div id="scene" className="nav-scene">{this.renderScene(this.state.scene)}</div>
			</div>
		);	
	}
  	
}

export default App;
