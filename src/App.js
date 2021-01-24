import logo, { ReactComponent } from './logo.svg';
import {Component} from 'react';
import {TTTGameUI} from './UI Controllers/BoardUI';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHome } from '@fortawesome/free-solid-svg-icons';
import './CSS/App.css';
import './CSS/home.css';

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

	nav(scene) {
		let sceneToRender;

		switch(scene) {
			case 'nav_ttt':
				sceneToRender = (<TTTGameUI gametype={0} player={0}/>);
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
			default:
				sceneToRender = (<div className="App">
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
			  					</div>);
		}

		return sceneToRender;
	}

	render() {
		console.log(this.state.scene);
		return (
			<div>
				<div id="nav" className="nav">
					<button id="nav_home" className="nav-button nav-icon" style={{height: 45, width: 75, padding: (13, 20)}} onClick={() => this.setScene('nav_home')}><FontAwesomeIcon icon="home" /></button>
					<button id="nav_ttt" className="nav-button" onClick={() => this.setScene('nav_ttt')}>Tic-Tac-Toe</button>
					<button id="nav_chess" className="nav-button" onClick={() => this.setScene('nav_chess')}>Chess</button>
					<button id="nav_coming" className="nav-button" onClick={() => this.setScene('nav_coming')}>Projects</button>
					<button id="nav_login" className="nav-button" style={{float: "right"}} onClick={() => this.setScene('nav_login')}>Login</button>
					<button id="nav_support" className="nav-button" style={{float: "right"}} onClick={() => this.setScene('nav_support')}>Support</button>
					<button id="nav_about" className="nav-button" style={{float: "right"}} onClick={() => this.setScene('nav_about')}>About</button>
				</div>
				<div id="scene" className="scene-body">{this.nav(this.state.scene)}</div>
			</div>
		);	
	}
  	
}

export default App;
