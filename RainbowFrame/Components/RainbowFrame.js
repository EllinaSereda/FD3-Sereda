import React from 'react';
import PropTypes from 'prop-types';
import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    let code=null;
    this.props.colors.forEach( (v,i,a) => 
        {i==0? code=<div style={{border:"5px solid "+v,padding:"10px"}}>{this.props.children}</div>:
        code=<div style={{border:"5px solid "+v,padding:"10px"}}>{code}</div>
    })
    return (
      <div className="RainbowFrame">
        {code}
      </div>
    );
  }

}

export default RainbowFrame;
