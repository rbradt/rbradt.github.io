import {TTTGameUI} from "./TTTGameUI.js"
import {TTTGame, TTTEvaluator} from "../Game/TTT/TTTGame.js"
import {Minimax} from "../Game/AI.js"
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
        //this.hovered = Array(3).fill(false);
        library.add(faRobot, faUserFriends, faGlobe, faTimes, faDotCircle, faCog, faCircle);
        this.game = null;
    }

    setGamemode = (gamemode, player) => this.setState({gamemode: gamemode, player: player});

    back = () => this.setState({gamemode: -1});

    setHovered(i) {
        if(this.state.hovered != i)
            this.setState({hovered: i});
    }

    panelButton(index) {
        switch(this.props.game) {
            case "ttt":
                return <TTTGameSelectButton i={index} gamemode={this.state.gamemode} hovered={this.state.hovered} firstInst={this.state.firstInst} setHovered={() => this.setHovered(index)} onClick={this.setGamemode}/>;
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
                    {(gamemode == -1)? null: <div onClick={this.back}>Back</div>}
                </div>
            );
        else if(this.props.game === "ttt") {
            this.game = new TTTGame(gamemode, player);
            switch(gamemode*3 + player) {
                case 3:
                case 4:
                case 5:
                    display =<div>ai vs ai</div>;
                    let tttAI = new Minimax((board) => TTTEvaluator.evaluate(board, true));
                    tttAI.addObserver(this.game);
                    this.game.addObserver(tttAI);
                case 0:
                case 1:  
                case 2:
                    display = <TTTGameUI gametype={gamemode} model={this.game} />;
                    break;
                case 6:
                case 7:
                    display =<div>loading screen/login</div>;
                    break;
                case 8:
                    display =<div>custom lobby</div>;   
                    break;
            }   
        }
            
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
            <div className="game-select-panel" style={style} onMouseEnter={this.props.setHovered} onClick={() => this.props.onClick(selectedMode, selectedPlayer)}>
                <FontAwesomeIcon icon={icons[j]}/>
                <div>{gamemodes[j]}</div>
                {this.props.gamemode==1? <FontAwesomeIcon icon={aiIcons[this.props.i]}/>: null}
            </div>
        );
    }
}

export {GameSelect};