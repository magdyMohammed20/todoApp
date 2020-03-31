import React,{Component} from 'react';
import './App.css';
import ShowItems from './Componets/ShowItems/ShowItems'
import AddItems from './Componets/AddItems/AddItems'

class App extends Component{
  state={
    items:[
      {id: 1 , name: 'magdy' , age : 20},
      {id: 2 , name: 'mohammed' , age : 22},
      {id: 3 , name: 'ali' , age : 23}
    ]
  }
  render(){
    return <div>
      <ShowItems/>
      <AddItems/>
    </div>
  }
}

export default App;
