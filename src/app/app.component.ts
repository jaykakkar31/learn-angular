import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/module/wishitems';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishComponent } from "./add-wish/add-wish.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jay';
  newWishText: string = '';  // Initialize here instead of in constructor

  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Get a job')
  ];

  filterWish :any
  //getter
  get  visibleItems(): WishItem[] {
    // console.log("CALLED");

    // let value = this.listFilter
    return this.items.filter(this.filterWish);
    // if (value == '0') {
    //   // console.log('caled=',this.items)
    //   return this.items
    // } else if (value == '1') {
    //   return this.items.filter((i) => !i.isComplete)
    // } else {
    //   return this.items.filter((i) => i.isComplete)
    // }
  }
  // filterChanged(value: number) {
  //   console.log(value)


  // console.log(this.visibleItems);

  // }



}