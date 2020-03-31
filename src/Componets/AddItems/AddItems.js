import React, { Component } from 'react';
import './AddItems.css'

class AddItems extends Component {
  state={
    name: '',
    age:''
  }
  
  handleChange = (e) =>{
    this.setState({
      // For Know Any Field Is Change
      [e.target.id] : [e.target.value]
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    // Pass The Current State To App.js For Add Element
    if(this.state.name !== '' && this.state.age !== ''){
      this.props.addItem(this.state)
    }else{
      alert('Enter The Name And Age Please !!')
    }

    // For Clear Inputs Previous Values After Adding 
    this.setState({
      name: '',
      age: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' id='name' placeholder='Enter Name..' onChange={this.handleChange} value={this.state.name}/>
          <input type='number' id='age' placeholder='Enter Age..' onChange={this.handleChange} value={this.state.age}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default AddItems;