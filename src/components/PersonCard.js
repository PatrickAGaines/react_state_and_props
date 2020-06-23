import React, { Component } from 'react';

class PersonCard extends Component {
constructor(props) {
    super(props);
    this.state = {
        age: this.props.age
    };
}

getOlder = () => {
    this.setState({ age: this.state.age+1 });
}

render(){
    const { firstName, lastName, hairColor } = this.props;
    return (
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <h3> Age: { this.state.age }</h3>
            <h3> Hair Color: { hairColor }</h3>
            <button onClick={ this.getOlder }>Birthday button</button>
        </div>
        )
    }
}

export default PersonCard;