import React,{Component} from 'react';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            history: {

            },
        };
    };

    render() {
        return (
            <h1>Home</h1>
        );
    }
}