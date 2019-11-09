import React, { Component } from 'react';
import {
    Link,Route
  } from "react-router-dom";
class Jump extends Component {
    render() {
        return (
            <Route to={this.props.to} children={({match})=>{
                return (
                    <div>
                        {match && ">"}
                        <Link to={this.props.to}></Link>
                    </div>
                )
            }}>{this.props.children}</Route>
        );
    }
}

export default Jump;