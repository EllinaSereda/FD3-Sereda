"use strict";

import {add} from '../modules/add';

test('проверка добавления элемента в массив', () => {

  expect(add([1,{a:1},6,3],{c:2})).toEqual([1,{a:1},6,3,{c:2}]);
  expect(add([],{x:'fff'})).toEqual([{x:'fff'}]);
  expect(add([1,{a:1},6,3],{c:2})).not.toBe([1,{a:1},6,3,{c:2}]);

});
