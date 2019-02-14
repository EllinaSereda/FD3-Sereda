import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Sprite } from './Sprite/Sprite.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    Sprite,
    PageComponent,
  ],
  providers: [],
  bootstrap: [PageComponent]
})
export class AppModule { }
