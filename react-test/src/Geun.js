import React,{Component, PropTypes} from 'react';

class Geun extends Component{



   constructor(){
     super();
     this.state={
          
          number:10
     };
     this.update = this.update.bind(this);
   }

  update(){
     this.setState({
       
          number : this.state.number +1
     });
  }

   render(){
        return (
            <div className="table" >
               <table>
                  <tr>
                    <td> <input type="button" value="리엑트 버튼" /></td>
                    <td><button onClick={this.update}>업데이트 버튼</button></td>
                    <td>버튼 누를때마다 1씩 올라감 : {this.state.number}</td>
                  </tr>
               </table>

               제 이름은 {this.props.name} 입니다,                
            </div>
        );
   }
}
Geun.defaultProps ={
  name : '그으노'
};

export default Geun;