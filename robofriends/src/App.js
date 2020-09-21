import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots.js';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

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
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots = {filteredRobots}/>
        </Scroll>
      </div>
      
    );
  }
}

export default App;