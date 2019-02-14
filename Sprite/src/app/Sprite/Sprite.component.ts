import { Component, Input } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';

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

}
