import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

class GameSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamemode: -1,
            player: -1
        }
    }

    setGamemode(i, j = -1) {
        this.setState({
            gamemode: i,
            player: j
        });
    }

    gmMenu() {
        return (
            <div className="gameselect"> 
                <div className="gameselect_panel" onClick={()=>this.setGamemode(0)}>
                    <div><FontAwesomeIcon icon=""/></div>
                    <div>Local</div>
                </div>
                <div className="gameselect_panel" onClick={()=>this.setGamemode(0)}>
                    <div><FontAwesomeIcon icon=""/></div>
                    <div>Local</div>
                </div>
                <div className="gameselect_panel" onClick={()=>this.setGamemode(0)}>
                    <div><FontAwesomeIcon icon=""/></div>
                    <div>Local</div>
                </div>
            </div>
        );
    }

    plMenu() {

    }

    render() {
        const gamemode = this.state.gamemode;
        const player = this.state.player;
        let display;

        if(gamemode == -1)
            display = (
                <div className="gameselect"> 
                    <div className="gameselect_panel" onClick={()=>this.setGamemode(0)}>
                        <div><FontAwesomeIcon icon=""/></div>
                        <div>Local</div>
                    </div>
                </div>
            );
        else if(player == -1) {

        }
        else
            display = (<TTTBoardUI gametype={gamemode} player={player}/>);

        return (
            {display}
        );
    }
}