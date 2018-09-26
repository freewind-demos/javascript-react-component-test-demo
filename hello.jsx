import React, {Component} from 'react';

class Hello extends Component {
    constructor(props) {
        // required if we want to invoke `this.`
        super(props);
        this.state = {
            username: ''
        };
    }

    render() {
        return <div>
            <h1 id="title">Hello {this.state.username}</h1>
            <input id="username" type="text" onChange={this.handleNewUsername.bind(this)}/>
        </div>;
    }

    handleNewUsername(event) {
        this.updateUserName(event.target.value);
    }

    updateUserName(value) {
        this.setState({username: value});
    }
}

export default Hello;
