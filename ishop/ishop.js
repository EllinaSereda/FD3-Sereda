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
            year: React.PropTypes.number.isRequired, //Год выхода
          })
        ),
        head:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            text: React.PropTypes.string.isRequired,
            code: React.PropTypes.number.isRequired,
          })
        )
      },
      getInitialState: function() {
        return { 
          selectedAnswerCode: null,
          deletedAnswerCode:[],
          deleted:[],
        };
      },
      answerSelected: function(code) {

        console.log('выбран ответ с кодом '+code);
        this.setState({selectedAnswerCode:code} );
      },
      deletedtr: function(code) {
        console.log(this.state.deleted);
        this.setState( (prevState, props) => { console.log (prevState.deleted);
          prevState.deleted.push(code);
          console.log(prevState.deleted);
          return {deletedAnswerCode:prevState.deleted} } );
      },
      
    
  
    render: function() {


      var productsCode=this.props.goods.map( v =>  //Список товаров
        React.createElement(Products, { 
          key:v.code,
          name:v.name, 
          code:v.code, 
          price:v.price, 
          imgURL:v.imgURL,
          count:v.count,
          year:v.year,
          cbDeleted: this.deletedtr,
          cbSelected: this.answerSelected,
          selectedAnswerCode:this.state.selectedAnswerCode,
          deletedAnswerCode:this.state.deletedAnswerCode,
        } )
      );


      var headCode=this.props.head.map( v => //Шапка таблицы
        React.createElement(Head, {key:v.code, code:v.code, text:v.text})
      );

      return React.DOM.div( {className:'IShop'}, 
        React.DOM.h2( {className:'ShopName'},this.props.shopName),
        React.DOM.table( {className:'Table'},
          React.DOM.thead( {className:'Head'},
              React.DOM.tr({className:'HeadTr'},headCode),
          ),
          React.DOM.tbody({className:'Products'}, productsCode),     
        ),
      );
    },
  
  });