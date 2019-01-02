import React from 'react';
import PropTypes from 'prop-types';


import './Products.css';
class Products extends React.Component{
    static propTypes = {     
        name: PropTypes.string.isRequired, //Название товара
        code: PropTypes.number.isRequired, //Уникальный код
        imgURL: PropTypes.string.isRequired, // URL Адрес изображения
        price: PropTypes.number.isRequired, //Цена
        count: PropTypes.number.isRequired, //Количество товара в наличии  
        year: PropTypes.number.isRequired, //Год выхода
        cbSelected: PropTypes.func.isRequired, //нажатая строка
        selectedAnswerCode: PropTypes.number,
        cbDeleted: PropTypes.func.isRequired,
    }
    trClicked = (EO) => {
        this.props.cbSelected(this.props.code);
    }
    deleteTr = (EO) => {
        this.props.cbDeleted(this.props.code);
    }
render() {
    var classN=null;
    (this.props.code==this.props.selectedAnswerCode)?
    classN="selectedTR":classN="tr"; 
    return  (<tr key={this.props.code} className={classN} onClick={this.trClicked}>
        <td className={'Name'}>{this.props.name}</td>
        <td className ={'IMG'}>
        <img className ={'IMG'} src ={this.props.imgURL}/> 
        </td>
        <td className ={'Price'}>{this.props.price} $</td> 
        <td className ={'Count'}>{this.props.count}</td>
        <td className ={'Year'}>{this.props.year}</td>
        <td><input type ={'button'} value ={'Delete'} onClick ={this.deleteTr}/></td>
        </tr>
    )
    }
}
export default Products;