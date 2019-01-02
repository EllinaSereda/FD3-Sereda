import React from 'react';
import PropTypes from 'prop-types';


import './IShop.css';

import Products from './Products';
import Head from './Head';

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
          selectedAnswerCode: null, //Выбранный товар
          products:this.props.goods, //список товаров
      }
      answerSelected = (code) =>{
        this.setState({selectedAnswerCode:code} );
      }
      deletedtr = (code)=> {
        this.setState( (prevState, props) => {
          return {products:prevState.products.filter(v=>v.code!=code)} 
        } );
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
          cbSelected={ this.answerSelected}
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
        </div>
      )
    }
  
  }
  export default IShop;