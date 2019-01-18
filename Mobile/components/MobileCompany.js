import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './Card';
import {voteEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };
  
  state = {
    name: this.props.name,
    clients: this.props.clients,
    status:0, //0 - все, 1 - активные , 2 - заблокированные
    CardMode:0,
    selectCli:null,
    newItemID:this.props.clients.length+1,
  };
  componentDidMount = () => {
    voteEvents.addListener('EDeleted',this.deleteClient);  //какого клиента удалили
    voteEvents.addListener('EChanged',this.changeClient);   //измененные данные клиента
    voteEvents.addListener('ECard',this.changeCardMode);   //режим карты 
    voteEvents.addListener('EEditCli',this.selectCli);  //клиент на редактирование
    voteEvents.addListener('ENew',this.addToCliends); //
  };

componentWillUnmount = () => {
    voteEvents.removeListener('EDeleted',this.deleteClient);
    voteEvents.removeListener('EChanged',this.changeClient);
    voteEvents.removeListener('ECard',this.changeCardMode);
    voteEvents.removeListener('EEditCli',this.selectCli);
    voteEvents.removeListener('ENew',this.addToCliends);
  };

changeCardMode=(code)=>{
    this.setState({CardMode:code});
  }
selectCli = (id) =>{  //Какой клиент на редактировании
  this.state.clients.forEach(v=>{(id==v.id)?this.setState({selectCli:v}):null});
}

deleteClient = (code) =>{
    this.setState({clients:this.state.clients.filter(v=>v.id!=code)},this.setNewId)
  
}
setNewId = () =>{
  this.setState({newItemID:this.state.clients.length+1});
}
addToCliends = (client) =>{
  let newClients=[...this.state.clients]; // копия самого массива клиентов
  newClients.push(client);
  this.setState({clients:newClients});
  this.setState({newItemID:(this.state.newItemID+1)});
  this.changeCardMode(0);

}

addClient=()=>{  //добавление клиента 
  this.changeCardMode(2);
}


changeClient = (client) => {   //Редактирование клиента
  let changed=false;
  let newClients=[...this.state.clients]; // копия самого массива клиентов
  newClients.forEach( (c,i) => {
    if ( c.id==client.id ) {
      let newClient={...c}; // копия хэша изменившегося клиента
      newClient=client;
      newClients[i]=newClient;
      changed=true;
    }
  } )
  if ( changed ){
    this.setState({clients:newClients});
  }
  this.changeCardMode(0);
}


  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  setAll = () =>{  //Показывать всех
    this.setStatus(0);
  }
  setAct = () =>{ //Только активных
    this.setStatus(1);
  }
  setBlock = () =>{  //только заблокированных
    this.setStatus(2);
  }

  setStatus = (mode) =>{
    let changed=false;
    if (this.state.status!=mode){
      changed=true;
    }
    if ( changed ){
      this.setState({status:mode});
    }
  }


  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {
      let code=null;
        switch (this.state.status){
          case 0:
          code=<MobileClient  key={client.id} info={client} />;
          break;
          case 1:
          if (client.balance>=0){
            code=<MobileClient key={client.id} info={client} />;
          }
          break;
          case 2:
          if (client.balance<0){
            code=<MobileClient key={client.id} info={client} />;
          }
          break;
        }
        return code;
      }
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="Velcom" onClick={this.setName2} />
        <input type="button" value="МТС" onClick={this.setName1} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <input type="button" value="Все" onClick={this.setAll} />
        <input type="button" value="Активные" onClick={this.setAct} />
        <input type="button" value="Заблокированные"  onClick={this.setBlock} />
        <table>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>{clientsCode}</tbody>
        </table>
      
        <input type="button" value="Добавить клиента" onClick={this.addClient} />
        <Card
          CardMode={this.state.CardMode}
         newItemID={this.state.newItemID}
         info={this.state.selectCli}
        />
      </div>
    )
    ;

  }

}

export default MobileCompany;
