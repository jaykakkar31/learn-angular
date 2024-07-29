import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/module/wishitems';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete, (item: WishItem) => item.isComplete]

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss'
})
export class WishFilterComponent implements OnInit {
  @Input() filterWish:any;
  @Output() filterWishChange = new EventEmitter<any>();
  ngOnInit(): void {
    this.updateFilter('0');
  }


  listFilter: string = '0'

  updateFilter(value: string) {
    let val: number = parseInt(value)
    this.filterWish=filters[val]
    this.filterWishChange.emit(this.filterWish);
  }
}
