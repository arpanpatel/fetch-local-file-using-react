import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });

    fetch("http://localhost:5000/test", {
      headers: myHeaders,

    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    return <div className="App">{JSON.stringify(this.state.data)}</div>;
  }
}

export default App;
