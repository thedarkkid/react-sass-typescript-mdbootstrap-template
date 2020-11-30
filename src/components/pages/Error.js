import React,{Component} from 'react';

export default class Error extends Component {
    constructor(props){
        super(props);
        this.state = {
            history: {

            },
        };
    };

    render() {
        return (
            <h1>404 Page Not Found!</h1>
        );
    }
}