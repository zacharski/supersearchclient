import React, { Component } from 'react';
import logo from './store3.png';
import './App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Search = require('./Search');
var Home = require('./Home');
var Nav = require('./Nav');
var Login = require('./Login');
var Logout = require('./Logout');



class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {username: '', zipcode: '88'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSubmit(username, zipcode){
    
    
    this.setState(function(){
      console.log("handle submit");
      console.log(username, zipcode);
      var newState = {};
      newState['username'] = username;
      newState['zipcode'] = zipcode;
      return newState;
    })
  }

  logout(){
    console.log("Logging Out");
    this.setState(function(){ 
      var newState = {};
      newState['username'] = '';
      newState['zipcode'] = '';
      return newState;
  })
  }

  render() {
    //<resultsTable repos={this.state.repos} />
    // on line 80 I had          {!this.state.searchTerm
    // <Route exact path={"/"} component={() => <Start socket={socket} addUser={addUser}/>}/>
    var username = this.state.username;
    var zipcode = this.state.zipcode;
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Nav user={this.state.username}/> 
          
        </div>
           <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/search' component={() => <Search username={this.state.username} zipcode={this.state.zipcode} /> } /> 
            <Route path='/login'  component={() => <Login onSubmit={this.handleSubmit} username={this.state.username}/> } /> 
            <Route path='/logout'  component={() => <Logout logout={this.logout} username={this.state.username} /> } /> 
            <Route render={
              function(){
                return <h1>Page Not Found</h1>
              }
            } />
          </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
