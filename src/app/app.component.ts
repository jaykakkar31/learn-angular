import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/module/wishitems';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish/wish-list/wish-list.component";
import { AddWishComponent } from "./wish/add-wish/add-wish.component";
import { WishFilterComponent } from "./wish/wish-filter/wish-filter.component";
import { EventService } from '../shared/services/EventServices'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WishService } from './wish/wish.service';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WishComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
}