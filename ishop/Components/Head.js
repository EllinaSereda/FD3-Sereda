import React from 'react';
import PropTypes from 'prop-types';

import './Head.css';
class Head extends React.Component{

    static propTypes = {     
        text: PropTypes.string.isRequired, //Название столбца
        code: PropTypes.number.isRequired, //Уникальный код
    }

    render() {
        return <th key={this.props.code}>{this.props.text}</th>;
    }
}
export default Head;