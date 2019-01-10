import React from 'react';
import PropTypes from 'prop-types';


import './IShop.css';

import Products from './Products';
import Head from './Head';
import Card from './Card';

class IShop extends React.Component{

   static propTypes= {     //Должен получить массив, элементами которого являются объекты (хэши) со следующими свойстваними (ключами)
        shopName:PropTypes.string.isRequired, 
        goods:PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired, //Название товара
            code: PropTypes.number.isRequired, //Уникальный код
            imgURL: PropTypes.string.isRequired, // URL Адрес изображения
            price: PropTypes.number.isRequired, //Цена
            count: PropTypes.number.isRequired, //Количество товара в наличии 
            year: PropTypes.number.isRequired, //Год выхода
          })
        ),
        head:PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired,
          })
        )
      }
      state={ 
          CardMode:0,//0- карточки нет, 1- катрочка в режиме отображения, 2 - в режиме редактирования
          selectedAnswerCode: null, //Выбранный товар
          products:this.props.goods, //список товаров
          selectedProduct:null,//данные выбранного продукта
          newItemID:null,
      }
      answerSelected = (code) =>{
        this.setState({selectedAnswerCode:code} );
        var good=this.state.products.find(v=>v.code==code);
        this.setState({selectedProduct:good});
      }
      deletedtr = (code)=> {
        this.setState( (prevState, props) => {
          return {products:prevState.products.filter(v=>v.code!=code)} 
        } );
      }
      edit = (code)=>{
        this.setState({CardMode:code} );
      }
      saveCard=(item)=>{
        let mas=this.state.products.map(v=>{
         return v.code==item.code?item:v;
        })
        this.setState({products:mas});
      }
     add=()=>{
      this.setState({selectedAnswerCode:null} );
      this.setState({CardMode:3} );
      this.setState({newItemID:Math.max.apply(null, this.state.products.map(v=>v.code))+1});
     }
     addProduct=(item)=>{
       let newMas=this.state.products.map(v=>v);
       newMas.push(item);
       this.setState({products:newMas});
       this.setState({selectedAnswerCode:null});
     }
     
    
  
    render(){
      var productsCode=this.state.products.map( v =>  //Список товаров
        <Products 
          key={v.code}
          name={v.name} 
          code={v.code} 
          price={v.price} 
          imgURL={v.imgURL}
          count={v.count}
          year={v.year}
          cbDeleted={ this.deletedtr}
          CardMode={this.state.CardMode}
          cbSelected={ this.answerSelected}
          cbCardMode={this.edit}
          selectedAnswerCode={this.state.selectedAnswerCode}/>
      );


      var headCode=this.props.head.map( v => //Шапка таблицы
        <Head  key={v.code} code={v.code} text={v.text}/>
      );

      return (
        <div className='IShop'>
        <h2 className='ShopName'>{this.props.shopName}</h2>
        <table className='Table'>
          <thead className='Head'>
          <tr className='HeadTr'>{headCode}</tr>
          </thead>
          <tbody className='Products'>{productsCode}</tbody>   
        </table>
        <input type ={'button'} value ={'Add product'} onClick={this.add} />
        <Card
         CardMode={this.state.CardMode}
         product={this.state.selectedProduct}
         cbSave={this.saveCard}
         cbEdit={this.edit}
         newItemID={this.state.newItemID}
         cbAdd={this.addProduct}
        />
        </div>
      )
    }
  
  }
  export default IShop;