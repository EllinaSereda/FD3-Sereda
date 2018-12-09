var Products = React.createClass({
    displayName: 'Products',

    propTypes: {     
        name: React.PropTypes.string.isRequired, //Название товара
        code: React.PropTypes.number.isRequired, //Уникальный код
        imgURL: React.PropTypes.string.isRequired, // URL Адрес изображения
        price: React.PropTypes.number.isRequired, //Цена
        count: React.PropTypes.number.isRequired, //Количество товара в наличии  
    },

  render: function() {
    return React.DOM.tr({key:this.props.code,className:'Product'},
        React.DOM.td({className:'Name'},this.props.name),
        React.DOM.td({className:'IMG'},
            React.DOM.img({className:'IMG',src:this.props.imgURL}),
        ),
        React.DOM.td({className:'Price'},this.props.price+' $'),
        React.DOM.td({className:'Count'},this.props.count),
    );
    },



});