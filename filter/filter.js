var Filter = React.createClass({

    displayName: 'IShop',
    propTypes: {     
        goods:React.PropTypes.arrayOf(//Должен получить массив, элементами которого являются объекты (хэши) со следующими свойстваними (ключами)
          React.PropTypes.shape({
            text: React.PropTypes.string.isRequired, //Слово
            code: React.PropTypes.number.isRequired, //Уникальный код
          })
        ),
      },
    checkChanged: function(EO){
        this.setState( {selectedCode:EO.target.checked} );
    },
    textChanged: function(EO){
        this.setState({textEntered:EO.target.value});
    },
    getInitialState: function() {
        return { 
         selectedCode: false,
          textEntered:'',
          array:this.props.words,
        };
    },
    
  
    render: function() {
    this.state.array=this.props.words.filter(v=>v.text.indexOf(this.state.textEntered)!=(-1));//Проверяем содержится ли введенный текст
    this.state.selectedCode==true? //Проверяем включен7а ли сортировка по алфавиту
    this.state.array.sort(compare):this.state.array.sort((a,b)=>a.code-b.code);
        function compare(a,b){
            if (a.text<b.text){
                return -1;
            }
            if (a.text>b.text){
                return 1;
            }
            return 0;
        }
    var arrayCode=this.state.array.map(v=>React.DOM.li({key:v.code}, v.text ));

      return React.DOM.div( {className:'Filter'},
      React.DOM.input( {type:'checkbox',onClick:this.checkChanged}),
      React.DOM.input({type:'text',name:'Text',onChange:this.textChanged}) ,
      React.DOM.ul( {className:'List'},arrayCode)
      );
    }
  
  });