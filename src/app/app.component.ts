import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/module/wishitems';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jay';
  newWishText: string = '';  // Initialize here instead of in constructor

  listFilter: string = '0'
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Get a job')
  ];
  get visibleItems(): WishItem[] {
    let value=this.listFilter
    if (value == '0') {
      // console.log('caled=',this.items)
      return this.items
    } else if (value == '1') {
      return this.items.filter((i)=>!i.isComplete)
    }else{
      return this.items.filter((i)=>i.isComplete)
    }
  }
  filterChanged(value: number) {
    console.log(value)


    // console.log(this.visibleItems);

  }
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log('clicked', item);
  }

  addNewWish() {
    console.log("-----------------", this.newWishText);
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';  // Clear the input after adding
  }
}