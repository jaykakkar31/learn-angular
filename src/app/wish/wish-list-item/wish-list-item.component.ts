import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../../shared/module/wishitems';
import { NgClass } from '@angular/common';
import {EventService} from '../../../shared/services/EventServices';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {


  constructor(private events:EventService){}
  // @Input() wishText!: string
  @Input() wish!: WishItem

  // @Input() fullFilled?: boolean
  // @Output() fullFilledChange = new EventEmitter<boolean>();

  get cssClass(){
    // return this.fullFilled?'strikout':''
    return this.wish.isComplete?'strikout':''
  }
  remove(){
    this.events.emit('removeWish',this.wish)
  }
  toggleFullFilled() {
    // this.fullFilled=!this.fullFilled
    // this.fullFilledChange.emit(this.fullFilled)
      this.wish.isComplete=!this.wish.isComplete

    // console.log('clicked', item);
  }
}
