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
          React.DOM.tr({key:product.code,className:'Product'},
            React.DOM.td({className:'Name'},product.name),
            React.DOM.td({className:'IMG'},
                React.DOM.img({className:'IMG',src:product.imgURL}),
            ),
            React.DOM.td({className:'Pricr'},product.price),
            React.DOM.td({className:'Count'},product.count),
          );
        productsCode.push(productCode);
      }
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
            React.DOM.tbody( {className:'Products'}, productsCode ), 
                
            ),
      );
    },
  
  });