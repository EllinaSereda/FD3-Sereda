import { Component } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'Sprite.component.html',
  styleUrls: ['Sprite.component.css']
})
export class Sprite {
  private mas:Array<Array<number>>=[];
  createPos():Array<Array<number>>{
    let x:number=0;
    let y:number=0;
    for (let i=0;i<=53;i++){
      
      this.mas[i]=[x*33,y*7.69];
      if(i!=0&&i!=51&&i!=52&&i%4==0){
        console.log(true);
        y+=1;
        x=0;
      }
      else if (i==52){
        x+=2;
      }
      else if (i==51){
        x+=2;
        y+=1;
      }
      else {
        x+=1;
      }
    }
    console.log(this.mas);
    return this.mas;
  }
  getX(x:number):number{
    this.createPos();
    console.log(this.mas[0]);
    return this.mas[x][0];
  }
  getY(y:number):number{
    //this.createPos();
    return this.mas[y][1];
  }


}
