import {TTTGameUI} from "./TTTGameUI.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faRobot, faUserFriends, faGlobe, faTimes, faDotCircle, faCog} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import { Component } from "react";
import '../CSS/gameselect.css'

class GameSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamemode: -1,
            player: -1,
            hovered: 1
        }
        this.hovered = Array(3).fill(false);
        library.add(faRobot, faUserFriends, faGlobe, faTimes, faDotCircle, faCog, faCircle);
    }

    setGamemode(gamemode, player) {
        this.setState({
            gamemode: gamemode,
            player: player,
        });
    }

    setHovered(i) {
        if(this.state.hovered == i)
            return;

        this.setState({hovered: i});
    }

    panelButton(index) {
        switch(this.props.game) {
            case "ttt":
                return <TTTGameSelectButton i={index} gamemode={this.state.gamemode} hovered={this.state.hovered} firstInst={this.state.firstInst} setHovered={() => this.setHovered(index)} onClick={(g,p)=>this.setGamemode(g,p)}/>;
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
                <div>
                    <div>Select gamemode:</div>
                    <div className="game-select unselectable"> 
                        {this.panelButton(0)}
                        {this.panelButton(1)}
                        {this.panelButton(2)}
                    </div>
                    {(gamemode == -1)? null: <div>Back</div>}
                </div>
            );
        else
            display = this.props.game=="ttt"? <TTTGameUI gametype={gamemode} player={player}/>: <div>Chess coming soon!</div>

        return display;
    }
}

class TTTGameSelectButton extends Component {
    render() {
        const icons = ['user-friends', 'robot', 'globe','times','robot','robot','times','dot-circle','cog'];
        const gamemodes = ['Local', 'vs Computer', 'Online','vs','vs','vs','Quick Match', 'Quick Match', 'Custom Match'];
        const aiIcons = ['robot', 'dot-circle', 'robot'];

        const isGSMenu = this.props.gamemode == -1;
        const isLocal = this.props.i == 0;
        const selectedMode = isGSMenu? this.props.i: this.props.gamemode;
        const selectedPlayer = isGSMenu? isLocal? 0: -1: this.props.i;
        const j = isGSMenu? this.props.i: this.props.i + this.props.gamemode*3;

        let style;
        if(this.props.hovered == this.props.i)
            style = this.props.gamemode==1? {filter: "none", flexDirection: "row"}: {filter: "none", flexDirection: "column"};
        else
            style = this.props.gamemode==1? {filter: "blur(10px)", flexDirection: "row"}: {filter: "blur(10px)", flexDirection: "column"};

        return(
            <div className="game-select-panel" style={style} onMouseEnter={()=>this.props.setHovered()} onClick={()=>this.props.onClick(selectedMode, selectedPlayer)}>
                <FontAwesomeIcon icon={icons[j]}/>
                <div>{gamemodes[j]}</div>
                {this.props.gamemode==1? <FontAwesomeIcon icon={aiIcons[this.props.i]}/>: null}
            </div>
        );
    }
}

export {GameSelect};