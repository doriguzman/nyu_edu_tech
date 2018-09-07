import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GraphTwo from './GraphTwo'
import logo from './logo.svg';
import './App.css';
import Graph from './Graph'

class App extends Component {
  render() {
    return (
      <div className="App">
          

    <h1> Consumer Choice </h1>
      <h2> Section 1: Budget Constraint</h2>
      
      <p> In making decisions about spending, we must all face two facts of economic life 
        <br/> (1) we have to pay for goods and services that we buy
        <br/> (2) we have limited funds to spend.
      </p>

      <p>Thus, we all have budget constraints to work with.
        <br/> A consumer;s budget constraint identifies which combinations of goods and service the consumer an afford with a limited budget, at given prices.  </p>

        <p> Consider Mark, a big fan of both movies and the local music scene. He has a total entertainment budget of $100 each month. The price of a <bold> movie is $10 </bold>, while a <bold>concert </bold> at his favorite local club costs him <bold> $20 </bold></p>
      {/* </div> */}
<div>
      {/* <Graph/> */}
      <Route exact path="/" component={Graph} />

      <Route exact path="/graph2" component={GraphTwo} />
      </div>
      </div>
    );
  }
}

export default App;
