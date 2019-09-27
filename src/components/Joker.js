import React from 'react';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import { Button } from 'reactstrap';

class Joker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.joke}</p>
                <p>{this.props.categories}</p>
                <div>
                    <Button onClick={() => this.props.fetchJoke()}>Get joke</Button>
                </div>         
            </div>
        );
    }
}

export default connect(
    state => { return { joke: state.joke, categories: state.categories }},
    { fetchJoke: actionCreators.fetchJoke }
)(Joker);