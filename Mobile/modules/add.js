"use strict";

function add(mas,elem) {
    let newMas=[...mas];
    newMas.push(elem);
    return newMas;
}

export {add};