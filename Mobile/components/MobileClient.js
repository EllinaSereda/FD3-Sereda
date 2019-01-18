import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';
import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
    id: PropTypes.number.isRequired, 
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }),
  }

  componentWillUnmount = () => {
    voteEvents.removeListener('EStatus',this.showMode);
  };
  showMode = (code) =>{
    this.setState({showMode:code})
  }
  Edit = (EO) =>{
    voteEvents.emit('EEditCli',this.props.info.id); 
    voteEvents.emit('ECard',1); 
  }
  Delete = (EO) =>{
      EO.stopPropagation();
      voteEvents.emit('EDeleted',this.props.info.id); 

  }
  code = null;

  render() {
    this.code=null;
    console.log("MobileClient id="+this.props.info.id+" render");
    return  <tr className='MobileClient'>
                <td>{this.props.info.fam}</td>
                <td>{this.props.info.im}</td>
                <td>{this.props.info.otch}</td>
               <td>{this.props.info.balance}</td>
                {(this.props.info.balance>=0)?
                <td className="active">Активен</td>
                :<td className="blocked">Заблокирован</td>
                }
                <td><input type="button" value="Редактировать" onClick={this.Edit} /></td>
                <td><input type="button" value="Удалить" onClick={this.Delete} /></td>
    </tr>

  }

}

export default MobileClient;
