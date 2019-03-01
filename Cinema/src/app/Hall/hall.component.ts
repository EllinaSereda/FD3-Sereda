import { Component } from '@angular/core';
import { TicketsService } from '../Tickets.service';
@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class Hall {
  private tickets:TicketsService;
  public available:number;
  public total:number;
  public occupied:number;
  constructor(_tickets:TicketsService) {
    this.tickets=_tickets;
    this.available=this.tickets.getAvailable();
    this.occupied=this.tickets.getOccupied();
    this.total=this.tickets.getTotal();
  }
  upDate():void{
    this.available=this.tickets.getAvailable();
    this.occupied=this.tickets.getOccupied();
    this.total=this.tickets.getTotal();
  }

}

