"use strict";

import {change} from '../modules/change';

test('проверка изменения элемента в массиве', () => {

  expect(change([{id:1,x:'first'},{id:2,x:'second'}],{id:2,x:'изменен'})).toEqual({mas:[{id:1,x:'first'},{id:2,x:'изменен'}],change:true});
  expect(change([{id:1,x:'first'},{id:2,x:'second'}],{id:2,x:'изменен'})).not.toBe({mas:[{id:1,x:'first'},{id:2,x:'изменен'}],change:true});
  expect(change([{id:1,x:'first'},{id:2,x:'second'}],{id:6,x:'другой'})).toEqual({mas:[{id:1,x:'first'},{id:2,x:'second'}],change:false});

});
