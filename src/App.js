
import React, { Component } from 'react'
import JSONPretty from 'react-json-pretty';
import './App.css';

export const _prettyPrint = function(data){
    let newString = JSON.stringify(data, undefined, 4);
    newString = newString.replace(/&/g, '&amp;');
    console.log(typeof(newString))        
    return newString;
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            passengers: [],
            error: null
        }
    }

    componentDidMount() {
        fetch('https://s3.ap-south-1.amazonaws.com/hiring-challenge/code-sample.json')
            .then(response => response.json())
            .then(data => this.setState({ 
                passengers: data,
                isLoading: false,
            }));
    }

    render() {
        const { isLoading, passengers, error } = this.state;
        return (
            <React.Fragment>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (

                    <div>
                    <div><pre>{_prettyPrint(passengers)}</pre></div>

                    {/*for syntax highlighting*/}
                    {/* <JSONPretty id="json-pretty" data={passengers}></JSONPretty> */}
                    </div>

                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                        <h3>Loading...</h3>
                    )}
            </React.Fragment>

        )
    }
}


export default App;