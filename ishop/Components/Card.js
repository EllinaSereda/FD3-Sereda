import React from 'react';
import PropTypes from 'prop-types';


import './Card.css';
class Card extends React.Component{
    static propTypes = {     
        product:PropTypes.shape({
              name: PropTypes.string, //Название товара
              code: PropTypes.number, //Уникальный код
              imgURL: PropTypes.string, // URL Адрес изображения
              price: PropTypes.number, //Цена
              count: PropTypes.number, //Количество товара в наличии 
              year: PropTypes.number, //Год выхода
            }),
        CardMode:PropTypes.number.isRequired,
        cbSave: PropTypes.func.isRequired,
        cbEdit: PropTypes.func.isRequired,
        cbAdd:PropTypes.func.isRequired,
        newItemID:PropTypes.number,
    }
    state={ 
        NewName:null,
        NewIMG:null,
        NewYear: null,
        NewPrice: null,
        NewCount: null,
        nameValid:null,
        imgValid:null,
        yearValid:null,
        priceValid:null,
        countValid:null,
        x:1,
    }
    nameChanged = (EO) =>{
        this.setState({NewName:EO.target.value} );
        this.setState({nameValid:EO.target.value});
        this.setState({x:0});
      }
    URLChanged = (EO) =>{
        this.setState({NewIMG:EO.target.value} );
        
        this.setState({imgValid:(/^https:\/\/.*\..+/i.test(EO.target.value))});
        this.setState({x:0});
      }
    priceChanged = (EO) =>{
        this.setState({NewPrice:Number(EO.target.value)} );
        this.setState({priceValid:Number(EO.target.value)});
        this.setState({x:0});
      }
    countChanged = (EO) =>{
        this.setState({NewCount:Number(EO.target.value)} );
        this.setState({countValid:Number(EO.target.value)});
        this.setState({x:0});
    }
    yearChanged = (EO) =>{
        this.setState({NewYear:Number(EO.target.value)} );
        this.setState({yearValid:Number(EO.target.value)});
        this.setState({x:0});
      }
    saveChanges=()=>{
        let item={};
        item.name=this.state.NewName?this.state.NewName:this.props.product.name;
        item.imgURL=this.state.NewIMG?this.state.NewIMG:this.props.product.imgURL;
        item.year=this.state.NewYear?this.state.NewYear:this.props.product.year;
        item.price=this.state.NewPrice?this.state.NewPrice:this.props.product.price;
        item.count=this.state.NewCount?this.state.NewCount:this.props.product.count;
        item.code=this.props.product.code;
        this.props.cbSave(item);
        this.props.cbEdit(0);
        this.setState({x:1});
    }
    cancelChanges=()=>{
        this.props.cbEdit(0);
        this.setState({x:1});
        this.setState({x:1});
        this.setState({NewName:null});
        this.setState({NewIMG:null});
        this.setState({NewYear: null});
        this.setState({NewPrice: null});
        this.setState({NewCount: null});
        this.setState({nameValid:null});
        this.setState({imgValid:null});
        this.setState({yearValid: null});
        this.setState({priceValid: null});
        this.setState({countValid: null});
    }
    addNew=(EO)=>{
        let newItem={};
        newItem.name=this.state.NewName;
        newItem.imgURL=this.state.NewIMG;
        newItem.year=this.state.NewYear;
        newItem.price=this.state.NewPrice;
        newItem.count=this.state.NewCount;
        newItem.key=this.props.newItemID;
        newItem.code=this.props.newItemID;
        this.props.cbEdit(0);
        this.props.cbAdd(newItem);
        this.setState({x:1});
        this.setState({NewName:null});
        this.setState({NewIMG:null});
        this.setState({NewYear: null});
        this.setState({NewPrice: null});
        this.setState({NewCount: null});
        this.setState({nameValid:null});
        this.setState({imgValid:null});
        this.setState({yearValid: null});
        this.setState({priceValid: null});
        this.setState({countValid: null});
    }
    
render() {
    let code=null;
    switch (this.props.CardMode){
        case 0:
        break ;
        case 1:  
        code=<div>
            <h2>{this.props.product.name}</h2>
            <img src={this.props.product.imgURL}/>
            <p>Price: {this.props.product.price} $</p> 
            <p>Year of Release: {this.props.product.year}</p> 
        </div>
        break;
        case 2: 
        code=<div>
            <p>ID: {this.props.product.code}</p> 
            <span className="fl">Name</span><input  type="text" name="Name" defaultValue={this.props.product.name} onChange={this.nameChanged}/>
            {(!this.state.nameValid&&this.state.nameValid!==null)? <span className="validation">Invalid Name</span>:null }
            <br/>
            <span className="fl">imgURL</span><input type="text" name="imgURL" defaultValue={this.props.product.imgURL} onChange={this.URLChanged}/>
            {(!this.state.imgValid&&this.state.imgValid!==null)? <span className="validation">Invalid URL</span>:null }
            <br/>
            <span className="fl">Price</span><input  type="text" name="Price" defaultValue={this.props.product.price} onChange={this.priceChanged}/>
            {(!this.state.priceValid&&this.state.priceValid!==null)? <span className="validation">Invalid Price</span>:null }
            <br/>
            <span className="fl">In Stock</span><input  type="text" name="InStock" defaultValue={this.props.product.count} onChange={this.countChanged}/>
            {(!this.state.countValid&&this.state.countValid!==null)? <span className="validation">Invalid Count</span>:null }
            <br/>
            <span className="fl">Year of Release</span><input type="text" name="Year" defaultValue={this.props.product.year} onChange={this.yearChanged}/>
            {(!this.state.yearValid&&this.state.yearValid!==null)? <span className="validation">Invalid year</span>:null }
            <br/>
            <input type ={'button'} disabled={((this.state.nameValid||this.state.nameValid===null)&&(this.state.imgValid||this.state.imgValid===null)&&(this.state.priceValid||this.state.priceValid===null)&&(this.state.countValid||this.state.countValid===null)&&(this.state.yearValid||this.state.yearValid===null))?null:"disabled"} value ={'Save'} onClick ={this.saveChanges}/>
            <input type ={'button'}  value ={'Cancel'} onClick ={this.cancelChanges}/>
        </div>
        break;
        case 3: 
        code=<div>
             <p>ID: {this.props.newItemID}</p> 
            <span className="fl">Name</span><input  type="text" name="Name"  onChange={this.nameChanged}/>
            {!this.state.nameValid? <span className="validation">Invalid Name</span>:null }
            <br/>
            <span className="fl">imgURL</span><input type="text" name="imgURL"  onChange={this.URLChanged}/>
            {!this.state.imgValid? <span className="validation">Invalid URL</span>:null }
            <br/>
            <span className="fl">Price</span><input  type="text" name="Price"  onChange={this.priceChanged}/>
            {!this.state.priceValid? <span className="validation">Invalid Price</span>:null }
            <br/>
            <span className="fl">In Stock</span><input  type="text" name="InStock"  onChange={this.countChanged}/>
            {!this.state.countValid? <span className="validation">Invalid Count</span>:null }
            <br/>
            <span className="fl">Year of Release</span><input type="text" name="Year" onChange={this.yearChanged}/>
            {!this.state.yearValid? <span className="validation">Invalid year</span>:null }
            <br/>
            <input type ={'button'} disabled={(this.state.nameValid&&this.state.imgValid&&this.state.priceValid&&this.state.countValid&&this.state.yearValid)?null:"disabled"} value ={'Save'} onClick ={this.addNew}/>
            <input type ={'button'}  value ={'Cancel'} onClick ={this.cancelChanges}/>
        </div>
        break;

    }
    return <div className="Card">{code}</div>
}
}
export default Card;