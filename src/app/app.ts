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
  ronflex: CollectionItem;

  constructor() {
    this.coin = new CollectionItem(); 
    this.coin.name = "Coin";
    this.coin.description = "A shiny gold coin.";
    this.coin.price = 3.99;
    this.coin.rarity = "Common";
    this.coin.image = "img/pokecoin.png";

    this.ronflex = new CollectionItem();
    this.ronflex.name = "Ronflex";
    this.ronflex.description = "Ronflex is a Normal-type Pokémon from Generation I. It’s very large and often sleeps in the way, blocking paths. Despite being lazy, it’s powerful, with high HP and strong physical attacks.";
    this.ronflex.price = 19.99;
    this.ronflex.rarity = "Rare";
    this.ronflex.image = "img/ronflex.png";
  }

  count : number = 0;
  incrementCount() {
    this.count++;
  }

  searchText = '';

}
