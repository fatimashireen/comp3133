import React from 'react';

class College extends React.Component {
    state = { }
    render(){
    return <pre> College <b>{this.props.name}</b> with address <b>{this.props.location}</b></pre>;
    }
}

export default College;