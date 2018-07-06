import React, { Component } from 'react';
import PhoneForm from './phoneform';
import Phoneinfo from './phoneinfo';
import Phoneinfolist from './phoneinfolist';

class Ata extends Component {
   id=2
 state={
   inform:[
      {
           id:0,
           name:'김민준',
           phone:'010-0000-0000'
      },
      {
           id:1,
           name:'김근호',
           phone:'010-0000-0001'
      }
    ]
  }

  handleCreate = (data) =>{
    const {inform} = this.state;
    this.setState({
      inform : inform.concat({id:this.id++, ...data})
    }) 
   }

 
  render() {
   

    return (
      <div>
          <PhoneForm onCreate={this.handleCreate} />     
          <Phoneinfolist data ={this.state.inform}></Phoneinfolist>
      </div>
    );
  }
}

export default Ata;