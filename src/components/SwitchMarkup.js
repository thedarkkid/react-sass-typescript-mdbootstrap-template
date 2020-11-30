import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function SwitchMarkup(props){
    const navigation = props.navigation;
    const switchMarkup  = (navigation.map( (navObject) => {
        return (
            <Route key={navObject.title} path={navObject.path} exact component={navObject.component} />
        );
    }));
    
    return (
        <Switch>
            {switchMarkup}
            <Route component={props.error} />
        </Switch>
    );
}