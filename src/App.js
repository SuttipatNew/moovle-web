import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import Homepage from './Components/Homepage';
import Result from './Components/Result';

class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      text_search: "",
      items: [
        {
          childKey: 0,
          image: ' ',
          header: ' ',
          description: ' ',
          meta: ' ',
          extra: ' ',
        }
      ]
    }
  }
  onChange_text_search(newName){
    this.setState({
        text_search: newName
    });
  }

  onChange_Item(newName){
    this.setState({
      item: newName
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Homepage changeText = {this.onChange_text_search.bind(this)}
                                                  /> } />
          <Route exact path="/search" component={ () => <Result text_search = {this.state.text_search}
                                                                      items = {this.state.items}
                                                        /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
