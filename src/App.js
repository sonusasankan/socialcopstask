
import React, { Component } from 'react'

class App extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
       fetch('https://s3.ap-south-1.amazonaws.com/hiring-challenge/code-sample.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}


export default App;