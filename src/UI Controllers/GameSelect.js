import {TTTGameUI} from "./TTTGameUI.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faRobot, faUserFriends, faGlobe, faTimes, faCircle, faCog} from '@fortawesome/free-solid-svg-icons';
import { Component } from "react";
import '../CSS/gameselect.css'

class GameSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamemode: -1,
            player: -1,
            hovered: Array(3).fill(false),
            firstInst: true
        }
        library.add(faRobot, faUserFriends, faGlobe, faTimes, faCircle, faCog);
    }

    setGamemode(gamemode, player) {
        this.setState({
            gamemode: gamemode,
            player: player,
            firstInst: true
        });
    }

    setHovered(i, flag) {
        const isHovered = this.state.hovered.slice();
        isHovered[i] = flag;

        this.setState({hovered: isHovered, firstInst: false});
    }

    panelButton(index, gamemode) {
        switch(this.props.game) {
            case "ttt":
                return <TTTGameSelectButton i={index} gamemode={this.state.gamemode} hovered={this.state.hovered} firstInst={this.state.firstInst} setHovered={(b) => this.setHovered(index, b)} onClick={(g,p)=>this.setGamemode(g,p)}/>;
                break;
            case "chess":
                break;
        }
    }

    render() {
        const gamemode = this.state.gamemode;
        const player = this.state.player;
        let display;

        if(player == -1)
            display = (
                <div className="gameselect unselectable"> 
                    {this.panelButton(0, gamemode)}
                    {this.panelButton(1, gamemode)}
                    {this.panelButton(2, gamemode)}
                </div>
            );
        else
            display = this.props.game=="ttt"? <TTTGameUI gametype={gamemode} player={player}/>: <div>Chess coming soon!</div>

        return display;
    }
}

class TTTGameSelectButton extends Component {
    render() {
        const isGSMenu = this.props.gamemode == -1;
        const isLocal = this.props.i == 0;
        const selectedMode = isGSMenu? this.props.i: this.props.gamemode;
        const selectedPlayer = isGSMenu? isLocal? 0: -1: this.props.i;
        const j = isGSMenu? this.props.i: this.props.i + this.props.gamemode*3;

        let style;
        if(this.props.hovered[this.props.i] || this.props.firstInst && this.props.i==1)
            style = this.props.gamemode==1? {filter: "none", flexDirection: "row"}: {filter: "none", flexDirection: "column"};
        else
            style = this.props.gamemode==1? {filter: "blur(10px)", flexDirection: "row"}: {filter: "blur(10px)", flexDirection: "column"};

        const icons = ['user-friends', 'robot', 'globe','times','robot','robot','times','circle','cog'];
        const gamemodes = ['Local', 'vs Computer', 'Online','vs','vs','vs','Quick Match', 'Quick Match', 'Custom Match'];
        const aiIcons = ['robot', 'circle', 'robot'];

        return(
            <div className="gs_panel" style={style} onMouseOver={()=>this.props.setHovered(true)} onMouseOut={()=>this.props.setHovered(false)} onClick={()=>this.props.onClick(selectedMode, selectedPlayer)}>
                <FontAwesomeIcon icon={icons[j]}/>
                <div>{gamemodes[j]}</div>
                {this.props.gamemode==1? <FontAwesomeIcon icon={aiIcons[this.props.i]}/>: <div></div>}
            </div>
        );
    }
}

export {GameSelect};