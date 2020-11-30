import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props: any) {
    const navigation = props.navigation;
    const navMarkup  = navigation.map( (navObject: any) => {
        return (
        <Link key={navObject.path} to={navObject.path}>{navObject.title}</Link>
        );
    });

    return (
        <div>
            {navMarkup}
        </div>
    )
}