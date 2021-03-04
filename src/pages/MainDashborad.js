import React, {Component} from 'react';
import '../css/MainDashboard.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import MarketInsights from '../pages/MarketInsights';

//assets
import AdvoticsLogo from '../Assets/advotics-logo.jpg';
import Profile from '../Assets/Profile.svg';
import Logout from '../Assets/logout@2x.png';
import Stats from '../Assets/Dashboard icon.svg';
import List from '../Assets/list.svg';

class MainDashboard extends Component {
    render(){
        return(
            <Router>
                <div className="container-fluid p-0">
                    <div className="row navbar">
                        <div className="col-md logo-con">
                            <img src={AdvoticsLogo} alt="advotics-logo" className="adv-logo"/>
                            <p className="power-text">powered by</p>
                            <img src={AdvoticsLogo} alt="advotics-logo" className="sm-adv-logo"/>
                        </div>
                        <div className="col-md username-con">
                            <div className="company-con">
                                <p className="user-text m-0">Username</p>
                                <p className="comp-text m-0">Company Name</p>
                            </div>
                            <img src={Profile} alt="advotics-logo" className="adv-logo"/>
                            <img src={Logout} alt="logout-icon" className="logout-icon"/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <nav id="sidebar">
                            <ul className="list-unstyled components">
                                <li className="active">
                                    <a href="/home">
                                        <img src={List} alt="stats-icon" className="list-icon"/>
                                    </a>
                                </li>
                                <li>
                                    <NavLink to="/marketinsights" activeClassName="activelink">
                                        <img src={Stats} alt="stats-icon" className="stat-icon"/>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/marketinsights" exact component={MarketInsights}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default MainDashboard;