import { Component, input, output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchButtonclicked = output<void>();
  searchClicked() {
    this.searchButtonclicked.emit();
  }

  search = input("Initial search");
  searchChanged = output<string>();
  updateSearch(value: string) {
    this.searchChanged.emit(value);
  }

}
