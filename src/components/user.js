import React, { Component } from 'react';
import UserTemplate from './user_template';

class User extends Component {
  state = {
    name: 'Francis',
    lastname: 'Jones',
    age: 25,
    hobbies: ['run','jump'],
    spanish: false,
    message(){console.log('hey')},
    car:{brand:"Ford", model:"focus"},
    mother:'Jane',
    color: 'red'
  }
  changeColor(){
    // this.setState({
    //   color:'blue'
    // })
    this.refs.myColor.style.color = 'blue' // Used refs link for changing color
  }
  render() {
    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h4 style={style} ref="myColor">{this.state.mother}</h4>
        <div onClick={() => this.changeColor()}>Change color</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;
