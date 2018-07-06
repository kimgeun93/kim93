import React, { Component } from 'react';

class Phoneinfo extends Component {
                   

     
    render() {
      const style ={
        border : '3px solid green',
        background:'#7d6d',
        padding : '8px',
        margin : '8px'
      };
    
          const {
            id, phone, name
          } = this.props.info;

       return(
        <div style={style}>  
            <div>id : {id}</div>
            <div>폰 번호 : {phone}</div>
            <div>이름 : {name}</div>
        </div>  
       );
    }

}


export default Phoneinfo;