"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './Components/IShop';

 let goods=require('./goods.json');

 let shop="I-Store";
 let tableHead=require('./tableHead.json');

ReactDOM.render(
    <IShop 
      shopName={shop}
      goods={goods} 
      head={tableHead}
    />
    , document.getElementById('container') 
  );