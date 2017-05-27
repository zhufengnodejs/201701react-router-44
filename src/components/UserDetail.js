import React,{Component} from 'react';
const USER_LIST = 'userlist';
export default class UserDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:{}};
    }
    componentWillMount(){
        let id = this.props.match.params.id;
        let userStr = localStorage.getItem(USER_LIST);
        let users = userStr?JSON.parse(userStr):[];
        let user = users.find(user=>user.id == id);
        this.setState({user});
    }
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">ID:{this.state.user.id}</div>
                <div className="panel-body">
                    用户名:{this.state.user.name}
                </div>
            </div>
        )
    }
}
