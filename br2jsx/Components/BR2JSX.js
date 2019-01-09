import React from 'react';
import PropTypes from 'prop-types';
import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    let code=this.props.text.split(/<.*?br.*?>/ig).map ((v,i) =>{
      return v;
    })
    for(let i=1,j=0;i<code.length;i=i+2, j++){
      code.splice(i,0,<br key={j}/>);
    }
    return (
      <div className="BR2JSX">
        {code}
      </div>
    );
  }

}

export default BR2JSX;
