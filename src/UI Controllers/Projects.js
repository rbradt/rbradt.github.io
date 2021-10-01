import {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faRaspberryPi, faGithub, faHtml5, faCss3, faJsSquare, faReact, faNpm, faJava, faLinux, faCuttlefish} from "@fortawesome/free-brands-svg-icons";
import {faMicrochip, faCode, faTerminal, faDatabase} from "@fortawesome/free-solid-svg-icons";
import '../CSS/projects.css';
import '../CSS/home.css';

class Projects extends Component {
    constructor(props) {
        super(props);

        /*******************************************************************************************************************
         * Temporary
         * move all of this data to a server later (using SQL) to allow for dynamic addition and removal of projects
         *******************************************************************************************************************/
        this.titles = [
            "RBRADT.GITHUB.IO",
            "Tic-Tac-Toe Online",
            "MLB TRIP PLANNER",
            "MESSENGER",
            "RASM"
        ];

        this.descriptions = [
            "This website. 100% local for now, but I plan on implementing a RESTful api with Spring Boot (ideally with" +
            " Docker and Kubernates to create microservices).",

            "Tic-Tac-Toe Online is an application that allows players to connect to and play tic-tac-toe over the web. Users can" +
            " create personal accounts and may view their match history/statistics, while administrators have access to tools to" +
            " remove users and end active matches. The creation of this app involved a number of design patterns, specifically the" +
            " observer, factory method, adapter and singleton patterns. The server-side app features multiple microservices" +
            " that I built from the ground up (using Java threading and socketing) to independently handle database management" +
            " and game logic, while the client-side application utilizes a pruning minimax algorithm for the tic-tac-toe AI.",

            "MLB Trip Planner is a niche application that assists MLB superfans in planning an ideal trip to" +
            " any number of the MLB stadiums in the United States. This app is reliant on graph data structures (both" +
            " adjacency list and adjacency matrix), and utilizes graph-based algorithms such as A*, Dijkstra's and Kruskal's algorithms" +
            " to determine the optimal path for any trip. Furthermore, this app involved Huffman Coding, skip lists and a heap" +
            " sort to increase the efficiency of the app, thus, providing a quality user experience.",

            "Messenger is a simple application that emulates AOL's Instant Messenger. It involved multithreading, networking" +
            " and database management to provide a basic messenging service.",

            "My Raspberry Assembly (RASM) projects are a series of reusable, optimized data structures and algorithms written" +
            " in ARM Assembly Language."
        ];

        this.languages = [
            "- JavaScript, HTML, CSS, React, TypeScript, NPM, FontAwesome -",
            "- Java, JavaFX, CSS, MySQL -",
            "- C++, QT GUI, CSS, SQL, Excel -",
            "- Java, JavaFX, CSS, MySQL -",
            "- ARM Assembly, C++, Linux, Raspberry Pi -"
        ];

        class icon {
            constructor(name, link) {
                this.name = name;
                this.link = link;
            }
        }

        this.icons = [
            ['js', 'html', 'css', 'react'].map(elem => {return new icon(elem, '')}),
            ['java', 'css', 'sql'].map(elem => {return new icon(elem, '')}),
            ['cpp', 'css', 'sql'].map(elem => {return new icon(elem, '')}),
            ['java', 'css', 'sql'].map(elem => {return new icon(elem, '')}),
            ['assembly', 'cpp', 'linux', 'pi'].map(elem => {return new icon(elem, '')})
        ];
        /*******************************************************************************************************************/
        
        library.add(faRaspberryPi, faGithub, faHtml5, faCss3, faJsSquare, faReact, faNpm, faJava, faLinux, faCuttlefish, faMicrochip, faCode, faTerminal, faDatabase);
        this.iconsJSX = new Map([
            ['js', <FontAwesomeIcon icon={["fab", "js-square"]}/>],
            ['html', <FontAwesomeIcon icon={["fab", "html5"]}/>],
            ['css', <FontAwesomeIcon icon={["fab", "css3"]}/>],
            ['react', <FontAwesomeIcon icon={["fab", "react"]}/>],
            ['java', <FontAwesomeIcon icon={["fab", "java"]}/>],
            ['sql', <FontAwesomeIcon icon="database"/>],
            ['cpp', <div><FontAwesomeIcon icon={["fab", "cuttlefish"]}/><span>++</span></div>],
            ['assembly', <FontAwesomeIcon icon="microchip"/>],
            ['linux', <FontAwesomeIcon icon={["fab", "linux"]}/>],
            ['pi', <FontAwesomeIcon icon={["fab", "raspberry-pi"]}/>]
        ]);
        
        // Request/fetch server data
        // ----------------------------------------------------------
        // Then:
        /* 
         *  let projects = RetrieveAllProjectsMessage.getProjectsList();
         * 
         *  this.UIProjectList = [];
         *  for(let i = 0; i < projects.length; i++) {
         *      let elementIcons = projects[i].getIcons().map(icon => {return <a href={icon.link} className={icon.name}>{this.iconsJSX.get(icon.name)}</a>});
         *      this.UIProjectList.push(<ProjectElement count={i} title={projects[i].getTitle()} description={projects[i].getDescription()} languages={projects[i].getLanguages()} icons={elementIcons}/>);
         *  }
         *
         */

        this.UIProjectList = [];
        for(let i = 0; i < this.titles.length; i++) {
            let elementIcons = this.icons[i].map(icon => {return <a href={icon.link}  className={icon.name}>{this.iconsJSX.get(icon.name)}</a>});
            this.UIProjectList.push(<ProjectElement count={i} title={this.titles[i]} description={this.descriptions[i]} languages={this.languages[i]} icons={elementIcons}/>);
        }
    }

    render() {
        return <div className="projects-list">{this.UIProjectList}</div>;
    }
}

class ProjectElement extends Component {
    render() {
        return (
            <div className="project-element">
                <div className="content layout-row project-img">

                    <img src="https://i.redd.it/bbflzw8lmfoz.png"/*Project Images*/></img>
                </div>
                <div className="project-divider"></div>
                <div className="project-info content layout-column">
                    <div className="title unselectable"><h3>{this.props.title}</h3></div>
                    <div className="languages">{this.props.languages}</div>
                    <div className="description"><p>{this.props.description}</p></div>
                    <div className="links content layout-row">
                        {this.props.icons}
                    </div>
                </div>
            </div>
        );
    }
}

export {Projects};