import {Component} from 'react';
import '../CSS/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.delay = null;
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
        console.log("scroll called");
        this.props.setScene(window.pageYOffset > (window.innerHeight*4/5)? 'nav_about': 'nav_home');
        this.delay = null;
    }

    render() {  
        return (
            <div className="main-container" onScroll={() => this.onScroll()}>
                <div id="home" className="home-wrapper">
                    <h1 className="header">ril<span className="flicker1">e</span>y bradt</h1>
                    <div className="content-row"></div>
                </div>
                <div id="about" className="about-wrapper">
                    <img></img>
                    <div></div>
                </div>
                <div id="projects" className="projects-wrapper">

                </div>
                <p>a</p>
                <div>b</div>
            </div>
        );
    }
}

export {Home};