import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../shared/module/wishitems';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {
  @Input() wishText!: string
  @Input() fullFilled?: boolean
  @Output() fullFilledChange = new EventEmitter<boolean>();

  get cssClass(){
    return this.fullFilled?'strikout':''
  }

  toggleFullFilled() {
    this.fullFilled=!this.fullFilled
    this.fullFilledChange.emit(this.fullFilled)

    // console.log('clicked', item);
  }
}
