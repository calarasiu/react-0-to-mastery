import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots.js';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robo => this.setState({robots: robo}));
  }

  onSearchChange = (event)=> {
    this.setState({searchfield:event.target.value});
  }
  
  render(){
   const {robots, searchfield} = this.state;  //destructuring
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return(
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundry> 
        </Scroll>
      </div>
      
    );
  }
}

export default App;