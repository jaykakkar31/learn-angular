import { Component } from '@angular/core';
import { WishItem } from '../../shared/module/wishitems';
import { WishService } from './wish.service';
import { EventService } from '../../shared/services/EventServices';
import { CommonModule } from '@angular/common';
import { AddWishComponent } from './add-wish/add-wish.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [CommonModule, AddWishComponent, WishFilterComponent, WishListComponent,WishListItemComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss'
})
export class WishComponent {
  title = 'Jay';
  newWishText: string = '';  // Initialize here instead of in constructor

  items: WishItem[] = [

  ];

  filterWish: any
  //getter
  get visibleItems(): WishItem[] {
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
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish) => {
      this.items = this.items.filter((i) => i !== wish)
      console.log(wish)
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      console.log("Data", data);

      this.items = data
    }
      , (error: any) => {
        alert(error.message)
      }
    )
  }


}
