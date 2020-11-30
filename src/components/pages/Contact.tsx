import React,{Component} from 'react';

export default class Contact extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            history: {

            },
        };
    };

    render() {
        return (
            <h1>Contact The Developer</h1>
        );
    }
}