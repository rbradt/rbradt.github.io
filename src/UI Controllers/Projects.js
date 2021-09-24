import {Component} from 'react';
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
            "TTT",
            "MLB TRIP PLANNER",
            "MESSENGER",
            "RASM"
        ];

        this.descriptions = [
            "This website. 100% local for now, but I plan on implementing a RESTful api with Spring Boot (ideally with" +
            " Docker and Kubernates to create microservices).",

            "TTT is an application that allows players to connect to online tic-tac-toe games. Users can create personal" +
            " accounts and may view their match history/statistics, while administrators have access to tools to remove" +
            " users and end active matches. The creation of this app involved a number of design patterns, specifically the" +
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

            "My Rasberry Assembly (RASM) projects are a series of reusable, optimized data structures and algorithms written" +
            " in ARM Assembly Language."
        ];

        this.languages = [
            "HTML, CSS, JavaScript, TypeScript, Reactjs, NPM, FontAwesome",
            "Java, CSS, JavaFX, MySQL",
            "QTCreator, MySQL, CSS, C++",
            "Java, MySQL, CSS, JavaFX",
            "Rasberry Pi, Linux, ARM Assembly, C++"
        ];
        /*******************************************************************************************************************/
        
        // Fetch server data
        // ----------------------------------------------------------
        // this.titles = SomeServerMessage.getProjects().getTitles();
        // ...

        // Then
        this.projectList = [];
        for(let i = 0; i < this.titles.length; i++)
            this.projectList.push(<ProjectElement count={i} title={this.titles[i]} description={this.descriptions[i]} languages={this.languages[i]} />);

    }

    render() {
        return <div className="projects-list">{this.projectList}</div>;
    }
}

class ProjectElement extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="project-element">
                <div className="content layout-row project-img">

                    <img src="https://i.redd.it/bbflzw8lmfoz.png"/*Project Images*/></img>
                </div>
                <div className="project-divider"></div>
                <div className="project-info content layout-column">
                    <div className="title unselectable"><h3>{this.props.title}</h3></div>
                    <div className="description"><p>{this.props.description}</p></div>
                    <div className="languages">{this.props.languages}</div>
                    <div className="links content layout-row">
                        replace with icon row
                    </div>
                </div>
            </div>
        );
    }
}

export {Projects};