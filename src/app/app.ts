import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CollectionItemCard, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  coin: CollectionItem;

  constructor() {
    this.coin = new CollectionItem(); 
    this.coin.name = "Coin";
    this.coin.description = "A shiny gold coin.";
    this.coin.price = 1.99;
    this.coin.rarity = "Common";
    this.coin.image = "img/pokecoin.png";
  }

  count : number = 0;
  incrementCount() {
    this.count++;
  }

  searchText = '';

}
