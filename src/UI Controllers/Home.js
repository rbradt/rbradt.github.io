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
        this.autoScroll();
    }
        
    componentDidUpdate() {
        this.autoScroll();
    }

    componentWillUnmount() {
        this.scrollDelay.clearDelay();
        window.removeEventListener('scroll', this.scrollDelay.preDelay());
    }

    autoScroll() {
        if(this.props.focus != null) {
            let pos;
            switch(this.props.focus) {   
                case "nav_about":
                    pos = window.innerHeight;
                    break;
                case "nav_coming":
                    pos = 2*window.innerHeight;
                    break;
                case "nav_home":
                default:
                    pos = 0;
            }

            window.scrollTo({top: pos, left: 0, behavior: 'smooth'});
            this.props.rmFocus();
        }
    }

    onScroll(e) {
        if(window.pageYOffset < window.innerHeight*4/5)
            this.props.setScene('nav_home');
        else if(window.pageYOffset < window.innerHeight*9/5)
            this.props.setScene('nav_about');
        else
            this.props.setScene('nav_coming');

    }

    onMouseMove(e) {
        let currShuttle = this.state.shuttle;
        let pos = document.getElementById("shuttle").getBoundingClientRect();
        if(currShuttle.isActive())
            this.setState({shuttle: new AnimatedSpaceShuttle(this.state.shuttle, [pos.left, pos.top], [e.clientX, e.clientY])});
    }

    onShuttleClicked(e) {
        let pos = document.getElementById("shuttle").getBoundingClientRect();
        let newShuttle = new AnimatedSpaceShuttle(this.state.shuttle, [pos.left + pos.width/2, pos.top + pos.height/2], [pos.left + pos.width/2, pos.top + pos.height/2]);
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
                    <h1>ril<span className="flicker1">e</span>y bradt</h1>
                    <div className="content layout-row home-button-container">
                        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/riley-b-09b8301a5/"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
                        <a aria-label="GitHub" href="https://github.com/rbradt"><FontAwesomeIcon icon={["fab", "github-square"]}/></a>
                        <a aria-label="Shuttle" id="shuttle" className={this.state.shuttle.getStyleClass()} style={this.state.shuttle.getStyle()} onClick={e => this.onShuttleClicked(e)}>
                            <FontAwesomeIcon icon="space-shuttle"/>
                        </a>
                    </div>
                </div>
                <div id="about" className="section-wrapper about">
                    <div className="content layout-column">
                        <img></img>
                    </div>
                    <div className="content layout-column">
                        <h2>Yo,</h2>
                        <p><span>I'm Riley Bradt</span>, an undergraduate student at the University of California, Riverside pursuing
                        a B.S. in Mathematics with a minor in Computer Science.
                        I low level languages, such as C++ and ARM Assembly Language, and am interested
                        in cybersecurity, DevSecOps, cryptography and networking.</p>
                    </div>
                </div>
                <div id="projects" className="section-wrapper projects">
                    <h2>Projects: </h2>
                    <Projects i={0} />
                    <Projects i={1} />
                    <Projects i={2} />
                    <Projects i={3} />
                    <Projects i={4} />
                </div>
                
            </div>
        );
    }
}

class Projects extends Component {
    constructor(props) {
        super(props);

        // move all of this data to a server later (using SQL) to allow for dynamic addition and removal of projects
        this.titles = [
            "rbradt.github.io",
            "TTT",
            "MLB Trip Planner",
            "Messenger",
            "RASM"
        ];

        this.descriptions = [
            "This website. 100% local for now, but I plan on implementing a RESTful api with Spring Boot (ideally with" +
            " Docker and Kubernates to create microservices).",

            "TTT Online is an application that allows players to connect to online tic-tac-toe games. Users can create" +
            " personal accounts and may view their match history/statistics, while administrators have access to tools to remove" +
            " users and end active matches. The creation of this app involved a number of design patterns, specifically the" +
            " observer, factory method, adapter and singleton patterns. The server-side app features multiple microservices" +
            " that I built from the ground up (using Java threading and socketing) to independently handle database management" +
            " and game logic, while the client-side application utilizes a pruning minimax algorithm for the tic-tac-toe AI.</p>",

            "The MLB Trip Planner is a niche application that seeks to help MLB superfans in planning an ideal trip to" +
            " any number of the MLB stadiums that dot the United States. This app is reliant on graph data structures (both" +
            " adjacency list and adjacency matrix), using graph-based algorithms such as A*, Dijkstra's and Kruskal's algorithms" +
            " to determine the optimal path for any trip. Furthermore, this app involved Huffman Coding, skip lists and a heap" +
            " sort to increase the efficiency of the app, thus, providing a quality user experience.",

            "Messenger is a simple application that emulates AOL's Instant Messenger. It involved multithreading, networking" +
            " and database management to provide a basic messenging service.",

            "My Rasberry Assembly (RASM) projects are a series of reusable, optimized data structures and algorithms written" +
            " in ARM Assembly Language."
        ];

        this.dependencies = [
            "HTML, CSS, JavaScript, TypeScript, Reactjs, NPM, FontAwesome",
            "Java, CSS, JavaFX, MySQL",
            "QTCreator, MySQL, CSS, C++",
            "Java, MySQL, CSS, JavaFX",
            "Rasberry Pi, Linux, ARM Assembly, C++"
        ];
    }

    render() {
        return (
            <div className="content layout-column">
                <div className="project-glossy-pane content layout-row">
                    <div className="project-img content layout-row">

                        <img src="https://cdn.betterttv.net/emote/600b65ea4e3ab965ef7576f5/3x"/*Project Image*/></img>
                    </div>
                    <div className="project-divider"></div>
                    <div className="project-info content layout-column">
                        <div className="info-wrapper"><h3>{this.titles[this.props.i]}</h3></div>
                        <div className="info-wrapper"><p>{this.descriptions[this.props.i]}</p></div>
                        <div className="info-wrapper">{this.dependencies[this.props.i]}</div>
                        <div className="content layout-row">
                            replace with icon row
                        </div>
                    </div>
                </div>
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
        // inverted signs because css rotates clockwise :/
        let theta   =  this.delta(0) >= 0? this.delta(1) >= 0? /* Q4 (+x and +y) */ Math.atan(this.delta(1)/this.delta(0))*180/Math.PI:
                                                                /* Q1 (+x and -y) */ 360 - Math.atan(-1*this.delta(1)/this.delta(0))*180/Math.PI: 
                                            this.delta(1) >= 0? /* Q3 (-x and +y) */ 180 - Math.atan(-1*this.delta(1)/this.delta(0))*180/Math.PI:
                                                                /* Q2 (-x and -y) */ 180 + Math.atan(this.delta(1)/this.delta(0))*180/Math.PI;
        
        // determine angle that will result in the shortest rotational transformation (when using css rotate())
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