import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/module/wishitems';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish.component.html',
  styleUrl: './add-wish.component.scss'
})
export class AddWishComponent {
  @Output() addWish=new EventEmitter<WishItem>()
  newWishText=""

  addNewWish() {
    console.log("-----------------", this.newWishText);
    // this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = '';  // Clear the input after adding
  }
}
