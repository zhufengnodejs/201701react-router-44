import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
export default class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <div className="navbar-brand">学生管理系统</div>
                            </div>
                            <div>
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">首页</Link></li>
                                    <li><Link to="/user">学生管理</Link></li>
                                    <li><Link to="/profile">个人设置</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                   <div className="container">
                       <Route exact path="/" component={Home}/>
                       <Route path="/user" component={User}/>
                       <Route path="/profile" component={Profile}/>
                   </div>
                </div>
            </Router>
        )
    }
}
