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

  deleteItem = id =>{

    // First Way Of Removing Element From Array
    /*
    const items = this.state.items;
    const indexOfDeleted = items.findIndex(item=> item.id == id);
    items.splice(indexOfDeleted , 1)
    this.setState({
      items
    })
    */

    // Second Way Of Removing Element From Array
    const items = this.state.items;
    const filter = items.filter(item => item.id !== id)
    this.setState({
      items: filter
    })


  }


  addItem = (item) =>{
    item.id = Math.random() // Generate Id For Every New Item
    const items = this.state.items;
    items.push(item);

    this.setState({
      items
    })
  }

  render(){
    return <div>
      <table>
        <thead>
          <tr border='1'>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.items.length > 0 ? (

              <ShowItems items={this.state.items} deleteItem={this.deleteItem}/>
            ):
            <tr className='NotFound'>
              <td colSpan='3'>There Is No Items To Show</td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3'><AddItems addItem={this.addItem}/></td>
          </tr>
        </tfoot>
      </table>
      
    </div>
  }
}

export default App;
