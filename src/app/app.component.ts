import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/module/wishitems';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jay';
  items = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffeee', true),
    new WishItem('Get a job')
  ]
  newWishText=""
  toggleItem(item:WishItem){
    item.isComplete=!item.isComplete
    console.log('clicked',item);

  }
  addNewWish(){

  }

}
