import { Component, Input, Output, EventEmitter ,ViewChild} from '@angular/core';
import { TicketsService } from '../Tickets.service';
@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class Cash {
  @ViewChild("numb") numbRef; 
  private tickets:TicketsService;
  constructor(_tickets:TicketsService) {
    this.tickets=_tickets;
  }
  public res:string;
  getTicket(x:number):void{
    
    let result:Array<number>=this.tickets.getTickets(x);
    this.upDate.emit();
    if (result.length!=0){
      this.res="Ваши места: " +result;
    }
    else
    this.res= "Билетов нет";
  
  }
  
  @Input('type')
  public name:string;

  @Output("change")
  public upDate:EventEmitter<void>=new EventEmitter<void>();
}
