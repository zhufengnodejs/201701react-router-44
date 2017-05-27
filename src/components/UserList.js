import React,{Component} from 'react';
import {Link} from 'react-router-dom';
const USER_LIST = 'userlist';
export default class UserList extends React.Component{
    constructor(){
        super();
        this.state = {users:[]};
    }
    componentWillMount(){
        let userStr = localStorage.getItem(USER_LIST);
        let users = userStr?JSON.parse(userStr):[];
        this.setState({users});
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.users.map((user,index)=>(
                        <li key={index} className="list-group-item">
                            <Link to={"/user/detail/"+user.id}>{user.name}</Link>
                        </li>
                    ))
                }

            </ul>
        )
    }
}
