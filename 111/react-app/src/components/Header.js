import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <button onClick={(props)=>{
                this.props.history.go(-1);}}>
             &lt;
             </button>
                {this.props.title}
            </div>
        );
    }
}

export default withRouter(Header);