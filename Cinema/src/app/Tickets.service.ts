import { Injectable } from "@angular/core";

@Injectable()
export class TicketsService {
  private seats:Array<number>=[1,2,3,5,6,7,8,9,12,13,15,16];
  private available:Array<number>=[1,2,3,5,6,7,8,9,12,13,15,16];
  private occupied:Array<number>=[];
 
  getTickets(n:number):Array<number>{
    let mas:Array<number>=[];
    for (let j=0;j<this.available.length;j++){
      if (mas.length==n)
        break;
      let item=this.available[j];
      for(let i=0;i<this.available.length;i++){
        
        if (this.available[i]==item)
          {
            mas.push(this.available[i]);
            item++;
            if (mas.length==n){
              this.occupy(mas);
              break;
            }
        }
        if (mas.length<n&&i==(this.available.length-1)){
          mas=[];
        }
      }
    }
    return mas;
  }
  occupy(x:Array<number>):void{
    this.available=this.available.filter((v:number)=>{
      return x.every(y=>y!=v)
    }
    )
    x.forEach(v=>this.occupied.push(v));
  }
  getTotal():number{
    return this.seats.length;

  }
  getAvailable():number{
    return this.available.length;
  }
  getOccupied():number{
    return this.occupied.length;
  }
}
