import React,{Component} from 'react';

export default class About extends Component {
    constructor(props: any){
        super(props);
        this.state = {
            history: {

            },
        };
    };

    render() {
        return (
            <h1>About</h1>
        );
    }
}