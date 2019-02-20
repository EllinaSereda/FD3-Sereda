import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'Sprite.component.html',
  styleUrls: ['Sprite.component.css']
})
export class Sprite {
  @Input('left')
  public left:number;
  @Input('top')
  public top:number;
  @Input('url')
  public url:string;

  @Output("card-change")
  public changeCard:EventEmitter<void>=new EventEmitter<void>();
}
