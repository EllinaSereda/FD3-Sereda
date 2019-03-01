import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hall } from './Hall/hall.component';
import { Cash } from './Cash/cash.component';
import { TicketsService } from './Tickets.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    Cash,
    Hall,
  ],
  providers: [TicketsService],
  bootstrap: [Hall]
})
export class AppModule { }
