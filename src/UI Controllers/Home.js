import {Component} from 'react';
import '../CSS/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        window.location.href = this.props.focus==='nav_about'? '#about': '#home';
    }
        
    componentDidUpdate() {
        window.location.href = this.props.focus==='nav_about'? '#about': '#home';
    }

    render() {
        
        return (
            <div className="main-container">
                <div className="section-wrapper">
                    <section id="home" className="header-wrapper">
                        <h1 className="header">ril<span className="flicker1">e</span>y bradt</h1>
                    </section>
                </div>
                <section id="about" className="content-row">
                    <img></img>
                    <div></div>
                </section>
                <p>a</p>
                <div>b</div>
            </div>
        );
    }
}

export {Home};