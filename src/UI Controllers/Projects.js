import {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faRaspberryPi, faGithub, faHtml5, faCss3, faJsSquare, faReact, faNpm, faJava, faLinux, faCuttlefish} from "@fortawesome/free-brands-svg-icons";
import {faMicrochip, faCode, faTerminal, faDatabase} from "@fortawesome/free-solid-svg-icons";
import {tempDataStorage} from '../Data/Project';
import '../CSS/projects.css';
import '../CSS/home.css';

class Projects extends Component {
    constructor(props) {
        super(props);

        // JSX/Fontawesome Icons
        library.add(faRaspberryPi, faGithub, faHtml5, faCss3, faJsSquare, faReact, faNpm, faJava, faLinux, faCuttlefish, faMicrochip, faCode, faTerminal, faDatabase);
        this.iconsJSX = new Map([
            ['js', <FontAwesomeIcon icon={["fab", "js-square"]}/>],
            ['html', <FontAwesomeIcon icon={["fab", "html5"]}/>],
            ['css', <FontAwesomeIcon icon={["fab", "css3"]}/>],
            ['react', <FontAwesomeIcon icon={["fab", "react"]}/>],
            ['java', <FontAwesomeIcon icon={["fab", "java"]}/>],
            ['sql', <FontAwesomeIcon icon="database"/>],
            ['cpp', <FontAwesomeIcon icon={["fab", "cuttlefish"]}/>],
            ['assembly', <FontAwesomeIcon icon="microchip"/>],
            ['linux', <FontAwesomeIcon icon={["fab", "linux"]}/>],
            ['pi', <FontAwesomeIcon icon={["fab", "raspberry-pi"]}/>]
        ]);
        
        // Retrieve data from server
        let AllProjects =  new tempDataStorage();
        let projects = AllProjects.getProjectsList(); // replace tempDataStorage with data pulled from server

        // Map projects to JSX Project Elements
        let i = 0;
        this.UIProjectList = projects.map(p => {
            let elementIcons = p.icons.map(icon => {return <a href={icon.link} aria-label={icon.name} className={icon.name}>{this.iconsJSX.get(icon.name)}</a>});
            return (<ProjectElement count={i++} title={p.title} description={p.description} languages={p.languages} icons={elementIcons} images={p.images} src={p.linkToSrc}/>);
        });
    }

    render() {
        return <div className="projects-list">{this.UIProjectList}</div>;
    }
}

// JSX for a single project
class ProjectElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: 0 
        }
    }

    setImg(i) {this.setState({image: i < 0? this.props.images.length - 1: i%this.props.images.length});}

    render() {
        //console.log(this.state.image);
        let i = this.props.count;
        let style = {animation: "element-init-" + (i%2 == 0? "right": "left") + " " + (0.7 - i/15) + "s ease-out forwards " + i + "s"};
        return (
            <div className="project-element" style={style}>
                <div className="content layout-row project-img">
                    <div className="prev-img unselectable" onClick={() => this.setImg(this.state.image - 1)}>{"<"}</div>
                    <img src={this.props.images[this.state.image]}></img>
                    <div className="next-img unselectable" onClick={() => this.setImg(this.state.image + 1)}>{">"}</div>
                </div>
                <div className="project-divider"></div>
                <div className="project-info content layout-column">
                    <div className="title unselectable">
                        <a href={this.props.src} aria-label="go to source code"><h3>{this.props.title} <span><FontAwesomeIcon icon="code"/></span></h3></a> 
                    </div>
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