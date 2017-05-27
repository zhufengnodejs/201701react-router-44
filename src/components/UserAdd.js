import React,{Component} from 'react';
const USER_LIST = 'userlist';
export default class UserAdd extends React.Component{
    handleSubmit = ()=>{
        let name = this.name.value;
        let userStr = localStorage.getItem(USER_LIST);
        let users = userStr?JSON.parse(userStr):[];
        users.push({name,id:Date.now()+Math.random()});
        localStorage.setItem(USER_LIST,JSON.stringify(users));
        this.props.history.push('/user/list');
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label className="control-label" htmlFor="name">用户名</label>
                    <input type="text" className="form-control" id="name" ref={ref=>this.name = ref}/>
                </div>
                <div className="form-group">
                   <button type="submit">添加用户</button>
                </div>
            </form>
        )
    }
}
