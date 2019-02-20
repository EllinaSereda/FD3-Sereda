import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css']
})
export class PageComponent {
  private mas:Array<Array<number>>=[];
  private width:number=137;
  private height:number=193;
  private url:string="http://fe.it-academy.by/Examples/cards2.png";
  private cardNumber:number=51;
  createPos():Array<Array<number>>{
    let x:number=0;
    let y:number=0;
    for (let i=0;i<=53;i++){
      
      this.mas[i]=[x*33,y*7.69];
      if(i!=0&&i!=51&&i!=52&&i%4==3){
        console.log(true);
        y+=1;
        x=0;
      }
      else if (i==51){
        x=0;
        y+=1;
      }
      else if (i==52){
        x+=2;
      }
      else {
        x+=1;
      }
    }
    return this.mas;
  }
  getX():number{
    this.createPos();
    return this.mas[this.cardNumber][0];
  }
  getY():number{
    return this.mas[this.cardNumber][1];
  }
  getUrl():string{
    return this.url;
  }
  getHeight():number{
    return this.height;
  }
  getWidth():number{
    return this.width;
  }
  getCard():number{
    return this.cardNumber;
  }
  cardChanged():number{
    if (this.cardNumber==53){
      this.cardNumber=0}
    else this.cardNumber+=1;
    return this.cardNumber
  }


}

