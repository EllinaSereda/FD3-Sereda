import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Sprite } from './Sprite.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    Sprite,
  ],
  providers: [],
  bootstrap: [Sprite]
})
export class AppModule { }
