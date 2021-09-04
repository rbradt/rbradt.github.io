import {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faLinkedin, faGithubSquare, faCog} from "@fortawesome/free-brands-svg-icons";
import {faSpaceShuttle, faSquareRootAlt} from "@fortawesome/free-solid-svg-icons";
import '../CSS/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.scrollDelay = new DelayFunction(e => this.onScroll(e), 200);
        this.mouseMoveDelay = new DelayFunction(e => this.onMouseMove(e), 200);

        this.state = {
            shuttle: new AnimatedSpaceShuttle()
        }
        
        library.add(faLinkedin, faGithubSquare, faSpaceShuttle);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollDelay.preDelay());

        if(this.props.focus != null) {
            let pos = this.props.focus==='nav_home'? 0: window.innerHeight;
            window.scrollTo({top: pos, left: 0, behavior: 'auto'});
            this.props.rmFocus();
        }
    }
        
    componentDidUpdate() {
        if(this.props.focus != null) {
            let pos = this.props.focus==='nav_home'? 0: window.innerHeight;
            window.scrollTo({top: pos, left: 0, behavior: 'smooth'});
            this.props.rmFocus();
        }
    }

    componentWillUnmount() {
        this.scrollDelay.clearDelay();
        window.removeEventListener('scroll', this.scrollDelay.preDelay());
    }

    onScroll(e) {
        console.log("onscroll called");
        this.props.setScene(window.pageYOffset > (window.innerHeight*4/5)? 'nav_about': 'nav_home');
    }

    onMouseMove(e) {
        let currShuttle = this.state.shuttle;
        let pos = document.getElementById("shuttle").getBoundingClientRect();
        if(currShuttle.isActive())
            this.setState({shuttle: new AnimatedSpaceShuttle(this.state.shuttle, [pos.left, pos.top], [e.clientX, e.clientY])});
    }

    onMouseStopped(e) {

    }

    onShuttleClicked(e) {
        let pos = document.getElementById("shuttle").getBoundingClientRect();
        let newShuttle = new AnimatedSpaceShuttle(this.state.shuttle, [pos.left, pos.top], [pos.left + pos.width/2, pos.top + pos.height/2]);
        newShuttle.setActive(!newShuttle.isActive());
        this.setState({shuttle: newShuttle});
    }

    renderAnimation() {
        // set animation property based off of selected scene
    }

    render() {  
        return (
            <div className="main-container" onMouseMove={this.mouseMoveDelay.postDelay() /* postDelay w/ 200ms or pause w/ 50ms work here */}>
                <div id="home" className="section-wrapper home unselectable">
                    <h1 className="header">ril<span className="flicker1">e</span>y bradt</h1>
                    <div className="content-row">
                        <button><FontAwesomeIcon icon={["fab", "linkedin"]}/></button>
                        <button><FontAwesomeIcon icon={["fab", "github-square"]}/></button>
                        <button id="shuttle" className={this.state.shuttle.getStyleClass()} style={this.state.shuttle.getStyle()} onClick={e => this.onShuttleClicked(e)}>
                            <FontAwesomeIcon icon="space-shuttle"/>
                        </button>
                    </div>
                </div>
                <div id="about" className="section-wrapper about">
                    <img></img>
                    <div></div>
                </div>
                <div id="projects" className="section-wrapper projects">

                </div>
                <p>a</p>
                <div>b</div>
            </div>
        );
    }
}

class AnimatedSpaceShuttle {
    constructor(obj, shuttlePos, cursorPos) {
        if(obj instanceof AnimatedSpaceShuttle) {
            this.ssCoords = shuttlePos;
            this.cursorCoords = cursorPos;
            this.angle = obj.angle;
            this.active = obj.active;
        }
        else {
            this.cursorCoords = cursorPos instanceof Array? cursorPos: [0, 0];
            this.ssCoords = shuttlePos instanceof Array? shuttlePos: [0, 0];
            this.angle = 0;
            this.active = false;
        }
    }

    isActive() {
        return this.active;
    }

    setActive(bool) {
        this.active = bool;
    }

    delta(coord) {return this.cursorCoords[coord] - this.ssCoords[coord]}
    distanceToCursor() {return Math.sqrt(Math.pow(this.delta(0), 2) + Math.pow(this.delta(1), 2));}
    angleToCursor() {
        /* inverted signs because css rotates clockwise :/ */
        let theta   =  this.delta(0) >= 0? this.delta(1) >= 0? /* Q4 (+x and +y) */ Math.atan(this.delta(1)/this.delta(0))*180/Math.PI:
                                                                /* Q1 (+x and -y) */ 360 - Math.atan(-1*this.delta(1)/this.delta(0))*180/Math.PI: 
                                            this.delta(1) >= 0? /* Q3 (-x and +y) */ 180 - Math.atan(-1*this.delta(1)/this.delta(0))*180/Math.PI:
                                                                /* Q2 (-x and -y) */ 180 + Math.atan(this.delta(1)/this.delta(0))*180/Math.PI;
                                                                
        let delta = theta - this.angle;
        if(Math.abs(delta) > 180)
            theta = this.angle + ((Math.abs(delta%360) <= 180)? delta%360: (delta <= 0? 1: -1)*(360 - Math.abs(delta%360)));

        return theta;
    }

    getStyleClass() {
        return (this.active)? "shuttle-active": "";
    }

    getStyle() {
        let style = {};
        if(this.active) {  
            if(this.distanceToCursor() > 100) {
                this.angle = this.angleToCursor();
                style={left: this.cursorCoords[0] + "px", top: this.cursorCoords[1] + "px", transform: "rotate(" + this.angle +"deg)"};
            }   
            else {
                this.angle = this.angleToCursor();
                style={left: this.ssCoords[0] + "px", top: this.ssCoords[1] + "px", transform: "rotate(" + this.angle +"deg)"};
            } 
        }

        return style;
    }
}

// Reduce polling for event handler functions
class DelayFunction {
    constructor(funct, delay) {
        this.currentDelay = null;
  
        /* Execute function call after a delay */
        this.preDelayFunc = e => {
            if(this.currentDelay == null)
                this.currentDelay = setTimeout(() => {
                    funct(e);
                    this.currentDelay = null;
                }, delay);
        }

        /* Execute function call immediately, then delay future calls */
        this.postDelayFunc = e => {
            if(this.currentDelay == null) {
                funct(e);
                this.currentDelay = setTimeout(() => {this.currentDelay = null;}, delay);
            }
        }

        /* Execute function call after a pause in calls to this function */
        this.pauseFunc = e => {
            clearTimeout(this.currentDelay);
            this.currentDelay = setTimeout(() => funct(e), delay);     
        }
    }

    preDelay() {return this.preDelayFunc;}
    postDelay(){return this.postDelayFunc;}
    pause(){return this.pauseFunc;}
    getDelay() {return this.currentDelay;}
    clearDelay() {clearTimeout(this.currentDelay);}
}

export {Home};