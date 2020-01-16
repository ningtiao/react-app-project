import React, {Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Index from '../pages/index/index'
class RootLayout  extends Component {
    render() {
        return (
            <div className="root-layout">
                <Switch>
                    <Route path='/' component={Index}></Route>
                    <Route path='/Index' component={Index}></Route>
                </Switch>
            </div>
        )
    }
}
export default RootLayout;