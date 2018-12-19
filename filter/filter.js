var Filter = React.createClass({

    displayName: 'Filter',
    propTypes: {     
        words:React.PropTypes.array,//Должен получить массив, элементами которого являются объекты (хэши) со следующими свойстваними (ключами)
      },
    checkChanged: function(EO){
        this.setState({selectedCode:EO.target.checked},this.sort);
    },
    textChanged: function(EO){
        this.setState({textEntered:EO.target.value},this.sort);
    },
    getInitialState: function() {
        return { 
         selectedCode: false,
          textEntered:'',
          array:this.props.words,
        };
    },
    sort(){
        var massiv=this.props.words.filter(v=>v.indexOf(this.state.textEntered)!=(-1));//Проверяем наличие введенного текста
        if (this.state.selectedCode) //Проверяем включена ли сортировка по алфавиту
        massiv.sort(compare);
        function compare(a,b){
            if (a<b){
                return -1;
            }
            if (a>b){
                return 1;
            }
            return 0;
        } 
        
        this.setState({array:massiv})
    },
    
    render: function() {
      
    var arrayCode=this.state.array.map((v,i)=>React.DOM.li({key:i},v));

      return React.DOM.div( {className:'Filter'},
      React.DOM.input( {type:'checkbox',onClick:this.checkChanged}),
      React.DOM.input({type:'text',name:'Text',onChange:this.textChanged}) ,
      React.DOM.ul( {className:'List'},arrayCode)
      );
    }
  
  });