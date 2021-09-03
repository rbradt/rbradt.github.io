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
        let pos = e.currentTarget.firstElementChild.lastElementChild.lastElementChild.getBoundingClientRect();
        if(currShuttle.isActive())
            this.setState({shuttle: new AnimatedSpaceShuttle([e.clientX, e.clientY], this.state.shuttle, [pos.left, pos.top])});
    }

    onShuttleClicked() {
        let newShuttle = new AnimatedSpaceShuttle([0, 0], this.state.shuttle, [0, 0]);
        newShuttle.setActive(!newShuttle.isActive());
        this.setState({shuttle: newShuttle});
    }

    renderAnimation() {
        // set animation property based off of selected scene
    }

    render() {  
        return (
            <div className="main-container" onMouseMove={this.mouseMoveDelay.postDelay()}>
                <div id="home" className="section-wrapper home unselectable">
                    <h1 className="header">ril<span className="flicker1">e</span>y bradt</h1>
                    <div className="content-row">
                        <button><FontAwesomeIcon icon={["fab", "linkedin"]}/></button>
                        <button><FontAwesomeIcon icon={["fab", "github-square"]}/></button>
                        <button className={this.state.shuttle.getStyleClass()} style={this.state.shuttle.getStyle()} onClick={() => this.onShuttleClicked()}>
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
    constructor(cursorCoords, obj, ssCoords) {
        if(obj instanceof AnimatedSpaceShuttle) {
            this.ssCoords = ssCoords instanceof Array? ssCoords: obj.ssCoords;
            this.cursorCoords = cursorCoords instanceof Array? cursorCoords: obj.cursorCoords;
            this.angle = obj.angle;
            this.active = obj.active;
            this.motion = obj.motion;
        }
        else {
            this.ssCoords = ssCoords instanceof Array? ssCoords: [0,0];
            this.cursorCoords = cursorCoords instanceof Array? cursorCoords: [0, 0];
            this.angle = 0;
            this.active = false;
            this.motion = false;
        }
    }

    isActive() {
        return this.active;
    }
    
    isInMotion() {
        return this.motion;
    }

    setActive(bool) {
        this.active = bool;
    }

    setInMotion(bool) {
        this.motion = bool;
    }

    delta(coord) {return this.cursorCoords[coord] - this.ssCoords[coord]}
    distanceToCursor() {return Math.sqrt(Math.pow(this.delta(0), 2) + Math.pow(this.delta(1), 2));}
    angleToCursor() {
                                                        /* inverted signs because css rotates clockwise :/ */
        return  this.delta(0) >= 0? this.delta(1) >= 0? /* Q4 (+x and +y) */ Math.atan(this.delta(1)/this.delta(0))*180/Math.PI:
                                                        /* Q1 (+x and -y) */ 360 - Math.atan(-1*this.delta(1)/this.delta(0))*180/Math.PI: 
                                    this.delta(1) >= 0? /* Q3 (-x and +y) */ 180 - Math.atan(-1*this.delta(1)/this.delta(0))*180/Math.PI:
                                                        /* Q2 (-x and -y) */ 180 + Math.atan(this.delta(1)/this.delta(0))*180/Math.PI;  
    }

    getStyleClass() {
        let className = "";
        if(this.active)
            className += "shuttle-active";    
        if(this.motion)
            className += " motion";
        
        return className;
    }

    getStyle() {
        let style = {};
        /*if(this.motion) {
            style={left: this.cursorCoords[0] + "px", top: this.cursorCoords[1] + "px", transform: "rotate(" + this.angle +"deg)"};
            console.log("motion style: " + this.cursorCoords[0] + "px " + this.cursorCoords[1] + "px " + "rotate(" + this.angle +"deg)");
            this.ssCoords[0] = this.cursorCoords[0];
            this.ssCoords[1] = this.cursorCoords[1];
        }*/
        if(this.active) {  
            if(this.distanceToCursor() > 100) {
        /*        this.motion = true;
            else {*/
                this.angle = this.angleToCursor();
                style={left: this.cursorCoords[0] + "px", top: this.cursorCoords[1] + "px", transform: "rotate(" + this.angle +"deg)"};
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