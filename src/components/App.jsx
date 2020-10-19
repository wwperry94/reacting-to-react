import React, { Component, Fragment } from 'react';

// let App = () => {
// return (<h1>Hello World</h1>)
// };

// export default App

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            text: "Confirm Age to Enter Site",
            placeholder: "Age",
            hasLoaded: false,
        }
    }
    componentDidMount() {
        this.setState({hasLoaded: true});
    };
    handleChange = (e) => {
        let { value } = e.target;
        this.setState({ inputText: value });
    };
    handleClick = async () => {
        // created a toggle button instead of making two different ones that switch true/false
        await this.setState({ hasLoaded: !this.state.hasLoaded });
        if (this.state.hasLoaded) {
            this.setState({ text: "Welcome!" });
        } else {
            this.setState({ text: "Loading..." });
        };
    };
    cardContent = () => {
        let { hasLoaded, inputText, placeholder } = this.state;
        if (hasLoaded) {
            return (
                <Fragment>
                    <h1>{this.props.h1}</h1>
                    <input value={inputText} type="search" name="value" id="search" placeholder={placeholder} onChange={this.handleChange}></input>
                </Fragment>
            );
        };
    }
    render() {
        let { text } = this.state;
        return (
            <Fragment>
                <h1 style={{ color: "red" }}>{text}</h1>
                {this.cardContent()}
                <button onClick={this.handleClick}>Step 8</button>
            </Fragment>
        )
    };
};