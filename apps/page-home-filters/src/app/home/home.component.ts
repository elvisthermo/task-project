import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ContentService } from '../services/content.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Content } from '../interfaces/news';
import { ContentTableModule } from '../content-table/content-table.module';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface EventSearch {
  query: string;
}

interface ISugestions {
  type: string;
  label: string;
  items: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    AutoCompleteModule,
    ChipModule,
    TableModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ToastModule,
    ContentTableModule,
  ],
  providers: [MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searches: string[] = [];
  stateOptions = [
    { label: 'Market News', value: 'market-news' },
    { label: 'Symbol News', value: 'symbol-news' },
  ];
  value: never | string = 'market-news';
  activeIndex = 0;
  content_news!: Content[];
  content_market!: Content[];
  filteredSearches: string[] = [];
  selectedItem = '';
  suggestions: any | string;

  constructor(
    private contentService: ContentService,
    private messageService: MessageService
  ) {
    this.content_news = this.contentService.getContentNews();
    this.searches = this.contentService.getRecentSearch();
    this.content_market = this.contentService.getContentMarket();
    this.suggestions = [{ label: 'Recent Search', disabled: true }];
  }

  filterSearches(event: EventSearch) {
    const filtered: string[] = [];
    const query = event.query.toLowerCase();

    for (let i = 0; i < this.searches.length; i++) {
      const search = this.searches[i];
      if (search.toLowerCase().indexOf(query) == 0) {
        filtered.push(search);
      }
    }

    this.filteredSearches = filtered;
  }

  search() {
    this.suggestions = [
      {
        type: 'group',
        label: 'Recent Searches',
        items: this.searches,
      },
    ];
  }

  addSymbol(): void {
    if (this.selectedItem && this.selectedItem !== '') {
      if (!this.searches.includes(this.selectedItem)) {
        this.searches.push(this.selectedItem);

        this.content_news = this.contentService.getContentNews(this.searches);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Search with symbol successful!',
        });
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: 'the symbol has already been added!',
        });
      }
    }
  }

  removeChip(index: number) {
    if (index !== -1) {
      this.searches.splice(index, 1);
      this.content_news = this.contentService.getContentNews();
      this.content_news = this.contentService.getContentNews(this.searches);
    }
  }
}
