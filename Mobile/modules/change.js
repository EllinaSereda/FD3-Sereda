"use strict";

function change(mas,elem) {
    let changed=false;
    let newMas=[...mas];
    newMas.forEach( (c,i) => {    
        if ( c.id==elem.id  ) {
          let newElem={...c}; // копия хэша изменившегося клиента
        newElem=elem;
          newMas[i]=newElem;
          changed=true;
        }
      } )
    let result={mas:newMas,change:changed};
    return result;
}

export {change};