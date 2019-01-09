import React from 'react';
import PropTypes from 'prop-types';
import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    let code=this.props.text.split(/<.*?br.*?>/ig).map ((v,i) =>{
      return <span key={i}>{v}<br/></span>
    })
    console.log(code);
    return (
      <div className="BR2JSX">
        {code}
      </div>
    );
  }

}

export default BR2JSX;
