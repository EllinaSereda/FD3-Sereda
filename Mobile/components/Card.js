import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';

import './Card.css';
class Card extends React.PureComponent{
    static propTypes = {
    
        info:PropTypes.shape({
        id: PropTypes.number.isRequired, 
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      }),
      }
    
    newImRef = null;
    newFamRef = null;
    newOtchRef = null;
    newBalanceRef = null;

    imChanged = (ref) =>{
       this.newImRef=ref;
    }
    famChanged = (ref) =>{
        this.newFamRef=ref;
      }
    otchChanged = (ref) =>{
        this.newOtchRef=ref;
    }
    balanceChanged = (ref) =>{
        this.newBalanceRef=ref;
    }

    saveChanges=()=>{
        let item={};
        item.im=this.newImRef.value;
        item.fam=this.newFamRef.value;
        item.otch=this.newOtchRef.value;
        item.balance=Number(this.newBalanceRef.value);
        item.id=this.props.info.id;
        voteEvents.emit('EChanged',item); 
    }
    cancelChanges=()=>{
        voteEvents.emit('ECard',0); 
    }
    addNew=(EO)=>{
        let item={};
        item.im=this.newImRef.value;
        item.fam=this.newFamRef.value;
        item.otch=this.newOtchRef.value;
        item.balance=Number(this.newBalanceRef.value);
        item.id=this.props.newItemID;
        voteEvents.emit('ENew',item); 
        
    }
    i=0;
    
render() {
    console.log("Card render");
    let code=null;
    switch (this.props.CardMode){
        case 0:
        break ;
        case 1: 
        code=<div key={this.i++}>
            <p>ID: {this.props.info.id}</p> 
            <span className="fl">Фамилия</span><input  type="text" name="Fam" defaultValue={this.props.info.fam} ref={this.famChanged}/>
            <br/>
            <span className="fl">Имя</span><input type="text" name="Im" defaultValue={this.props.info.im} ref={this.imChanged}/>
            <br/>
            <span className="fl">Отчество</span><input  type="text" name="Otch" defaultValue={this.props.info.otch} ref={this.otchChanged}/>
            <br/>
            <span className="fl">Баланс</span><input  type="text" name="Balans" defaultValue={this.props.info.balance} ref={this.balanceChanged}/>
            <br/>
            <input type ={'button'} value ={'Save'} onClick ={this.saveChanges}/>
            <input type ={'button'}  value ={'Cancel'} onClick ={this.cancelChanges}/>
        </div>
        break;
        case 2: 
        code=<div>
             <p>ID: {this.props.newItemID}</p> 
             <span className="fl">Фамилия</span><input  type="text" name="Fam"  ref={this.famChanged}/>
            <br/>
            <span className="fl">Имя</span><input type="text" name="Im"  ref={this.imChanged}/>
            <br/>
            <span className="fl">Отчество</span><input  type="text" name="Otch"  ref={this.otchChanged}/>
            <br/>
            <span className="fl">Баланс</span><input  type="text" name="Balans"  ref={this.balanceChanged}/>
            <br/>
            <input type ={'button'} value ={'Save'} onClick ={this.addNew}/>
            <input type ={'button'}  value ={'Cancel'} onClick ={this.cancelChanges}/>
        </div>
        break;

    }
    return <div className="Card">{code}</div>
}
}
export default Card;