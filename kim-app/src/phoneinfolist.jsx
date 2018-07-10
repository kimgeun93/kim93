
import React, { Component } from 'react';
import Phoneinfo from './phoneinfo';

class Phoneinfolist extends Component {
    static defaultProps = {
        data: []
      }
    
      render() {
        const { data } = this.props;
        const list = data.map(
          info => (<Phoneinfo key={info.id} info={info}/>)
        );
        
        return (
          <div >
             {list}    
          </div>
        );
      }
}

export default Phoneinfolist;