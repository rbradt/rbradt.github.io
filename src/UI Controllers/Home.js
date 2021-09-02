import {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faLinkedin, faGithubSquare, faCog} from "@fortawesome/free-brands-svg-icons";
import {faSpaceShuttle} from "@fortawesome/free-solid-svg-icons";
import '../CSS/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.delay = null;
        library.add(faLinkedin, faGithubSquare, faSpaceShuttle);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollDelay);

        if(this.props.focus != null) {
            let pos = this.props.focus==='nav_home'? 0: window.innerHeight;
            window.scrollTo({top: pos, left: 0, behavior: 'auto'});
        }
    }
        
    componentDidUpdate() {
        if(this.props.focus != null) {
            let pos = this.props.focus==='nav_home'? 0: window.innerHeight;
            window.scrollTo({top: pos, left: 0, behavior: 'smooth'});
        }
    }

    componentWillUnmount() {
        clearTimeout(this.delay);
        window.removeEventListener('scroll', this.scrollDelay);
    }

    // reduce polling for scroll event
    scrollDelay = () => {
        if(this.delay == null)
            this.delay = setTimeout(() => this.onScroll(), 200);
    }

    onScroll() {
        this.props.setScene(window.pageYOffset > (window.innerHeight*4/5)? 'nav_about': 'nav_home');
        this.delay = null;
    }

    renderAnimation() {
        // set animation property based off of selected scene
    }

    render() {  
        return (
            <div className="main-container">
                <div id="home" className="section-wrapper home">
                    <h1 className="header">ril<span className="flicker1">e</span>y bradt</h1>
                    <div className="content-row">
                        <button><FontAwesomeIcon icon={["fab", "linkedin"]}/></button>
                        <button><FontAwesomeIcon icon={["fab", "github-square"]}/></button>
                        <button><FontAwesomeIcon icon="space-shuttle"/></button>
                    </div>
                </div>
                <div id="about" className="section-wrapper">
                    <img></img>
                    <div></div>
                </div>
                <div id="projects" className="section-wrapper">

                </div>
                <p>a</p>
                <div>b</div>
            </div>
        );
    }
}

export {Home};