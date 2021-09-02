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
		this.state = {
			scene: 'nav_home',
			goTo: 'nav_home'
		};
		library.add(faHome);
	}

	setScene(newScene) {
		if(this.state.scene !== newScene)
			this.setState({scene: newScene, goTo: null});
	}

	scrollToScene(newScene) {
		this.setState({scene: newScene, goTo: newScene});
	}

	renderScene(scene) {
		let sceneToRender;

		switch(scene) {
			case 'nav_ttt':
				sceneToRender = <GameSelect game="ttt" />;
				break;
			case 'nav_chess':
				break;
			case 'nav_login':
				break;
			case 'nav_support':
				break;
			case 'nav_about':
			case 'nav_coming':
			case 'nav_home':
				sceneToRender = <Home focus={this.state.goTo} scene={this.state.scene} setScene={scene => this.setScene(scene)} rmFocus={()=>this.setState({goTo: null})} />;
				break;

			default:
				/*sceneToRender = (<MovingBanner scene={
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
				} />);*/
		}

		return sceneToRender;
	}

	setSelected(id) {
		return id == this.state.scene? {color: '#ffffff', filter: "drop-shadow(0 0 1px white) drop-shadow(0 0 2px red)"}: {};
	}

	render() {
		return (
			<div className="nav-container">
				<div id="nav" className="nav-panel">
					<button id="nav_home" className="nav-button nav-icon" style={this.setSelected("nav_home")} aria-label="Home" onClick={() => this.scrollToScene('nav_home')}><FontAwesomeIcon icon="home" /></button>
					<button id="nav_ttt" className="nav-button" style={this.setSelected("nav_ttt")} onClick={() => this.setScene('nav_ttt')}>Tic-Tac-Toe</button>
					<button id="nav_chess" className="nav-button" style={this.setSelected("nav_chess")} onClick={() => this.setScene('nav_chess')}>Chess</button>
					<button id="nav_coming" className="nav-button" style={this.setSelected("nav_coming")} onClick={() => this.scrollToScene('nav_coming')}>Projects</button>
					<button id="nav_login" className="nav-button tr" style={this.setSelected("nav_login")} onClick={() => this.setScene('nav_login')}>Login</button>
					<button id="nav_support" className="nav-button tr" style={this.setSelected("nav_support")} onClick={() => this.setScene('nav_support')}>Support</button>
					<button id="nav_about" className="nav-button tr" style={this.setSelected("nav_about")} onClick={() => this.scrollToScene('nav_about')}>About</button>
				</div>
				<div id="scene" className="nav-scene">{this.renderScene(this.state.scene)}</div>
			</div>
		);	
	}
  	
}

export default App;
