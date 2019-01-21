"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
//import MobileClient from '../components/MobileClient';

test('работа MobileCompany', () => {
    let companyName='Velcom';
    let clientsArr=[ 
      {id:1, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
      {id:2, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
      {id:3, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
      {id:4, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
    ];
  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  );
  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  
  // найдём в вёрстке компонента количество продуктов в таблице
  const Spisok1=(component.root.find( el => el.type=='tbody')).children.length;
  // найдём в вёрстке компонента кнопку удалить для первого продукта 
  const Delete=component.root.findAll( el =>( el.props.value=='Удалить'))[0];
  //нажмем на кнопку
  Delete.props.onClick();
  // найдём в вёрстке компонента количество продуктов в таблице
  const Spisok2=(component.root.find( el => el.type=='tbody')).children.length;
  //проверим уменьшилось ли количество  элементов в таблице
  expect(Spisok2).toBe(Spisok1-1);


  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  // найдём в вёрстке компонента кнопку МТС
  const   MTC=component.root.find(el =>( el.props.value=='МТС'));
  //нажмем на кнопку, изменим название компании
  MTC.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
  const Name=(component.root.find( el => el.props.className=='MobileCompanyName')).children;
  expect(Name[1]).toBe('МТС');

  const   Blocked=component.root.find(el =>( el.props.value=='Заблокированные'));
  Blocked.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const spisok=(component.root.find( el => el.type=='tbody')).children.length;
  expect(spisok).toBe(0);
    
});
