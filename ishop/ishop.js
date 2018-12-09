var IShop = React.createClass({

    displayName: 'VotesBlock',
  
    getDefaultProps: function() {
      return { question: "Вопрос ни о чём" }
    },
  
    render: function() {
      var productsCode=[];
      for ( var a=0; a<this.props.goods.length; a++ ) {
        var product=this.props.goods[a];
        var productCode=        
          React.DOM.tr({key:good.code,className:'Product'},
            React.DOM.td({className:'Name'},product.name),
            React.DOM.td({className:'IMG'},
                React.DOM.img({className:'IMG',src:product.imgURL}),
            ),
            React.DOM.td({className:'Pricr'},product.price),
            React.DOM.td({className:'Count'},product.count),
          );
        productsCode.push(productCode);
      }
      return React.DOM.table( {className:'VotesBlock'}, 

        React.DOM.div( {className:'Question'}, this.props.question ),
        React.DOM.div( {className:'Answers'}, answersCode ),
      );
    },
  
  });