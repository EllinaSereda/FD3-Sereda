var Head = React.createClass({
    displayName: 'Head',

    propTypes: {     
        text: React.PropTypes.string.isRequired, //Название столбца
        code: React.PropTypes.number.isRequired, //Уникальный код
    },

    render: function() {
        return React.DOM.th({key:this.props.code},this.props.text);
    },



});