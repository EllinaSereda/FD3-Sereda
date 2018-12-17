var Products = React.createClass({
    displayName: 'Products',

    propTypes: {     
        name: React.PropTypes.string.isRequired, //Название товара
        code: React.PropTypes.number.isRequired, //Уникальный код
        imgURL: React.PropTypes.string.isRequired, // URL Адрес изображения
        price: React.PropTypes.number.isRequired, //Цена
        count: React.PropTypes.number.isRequired, //Количество товара в наличии  
        year: React.PropTypes.number.isRequired, //Год выхода
        cbSelected: React.PropTypes.func.isRequired, //нажатая строка
        selectedAnswerCode: React.PropTypes.number,
        deletedAnswerCode: React.PropTypes.array, 
        cbDeleted: React.PropTypes.func.isRequired,
    },
    trClicked: function(EO) {
        this.props.cbSelected(this.props.code);
      },
    deleteTr: function(EO) {
        this.props.cbDeleted(this.props.code);
    },

render: function() {
    var classN=null;
    (this.props.code==this.props.selectedAnswerCode)?
    classN="selectedTR":classN="tr"; 
    return  (this.props.deletedAnswerCode.some(v => this.props.code==v))?
    null:
    React.DOM.tr({key:this.props.code,className:classN,onClick:this.trClicked},
        React.DOM.td({className:'Name'},this.props.name),
        React.DOM.td({className:'IMG'},
            React.DOM.img({className:'IMG',src:this.props.imgURL}),
        ),
        React.DOM.td({className:'Price'},this.props.price+' $'),
        React.DOM.td({className:'Count'},this.props.count),
        React.DOM.td({className:'Year'},this.props.year),
        React.DOM.td(null,
            React.DOM.input( {type:'button',value:'Delete', onClick:this.deleteTr} ),
            ),
    )
    },



});