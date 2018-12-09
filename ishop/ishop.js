var IShop = React.createClass({

    displayName: 'IShop',

    propTypes: {     //Должен получить массив, элементами которого являются объекты (хэши) со следующими свойстваними (ключами)
        shopName: React.PropTypes.string.isRequired, 
        goods:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            name: React.PropTypes.string.isRequired, //Название товара
            code: React.PropTypes.number.isRequired, //Уникальный код
            imgURL: React.PropTypes.string.isRequired, // URL Адрес изображения
            price: React.PropTypes.number.isRequired, //Цена
            count: React.PropTypes.number.isRequired, //Количество товара в наличии 
          })
        )
      },
  
  
    render: function() {
      var productsCode=this.props.goods.map( v =>
        React.createElement(Products, { key:v.code,
          name:v.name, code:v.code, price:v.price, imgURL:v.imgURL,count:v.count} )
      );

      return React.DOM.div( {className:'IShop'}, 
        React.DOM.h2( {className:'ShopName'},this.props.shopName),
        React.DOM.table( {className:'Table'},
            React.DOM.thead( {className:'Head'},
                React.DOM.tr({className:'HeadTr'},
                    React.DOM.th({className:'HeadName'},'Name'),
                    React.DOM.th({className:'HeadIMG'},'Picture'),
                    React.DOM.th({className:'HeadPrice'},'Price'),
                    React.DOM.th({className:'HeadRemain'},'Remain'),
                ),
            ),
            React.createElement(Products, {goods:this.props.goodså} ),     
          ),
      );
    },
  
  });