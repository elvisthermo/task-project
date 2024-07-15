/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ISugestions } from '../interfaces/ISugestions';
import { Content } from '../interfaces/news';
import { ContentService } from '../services/content.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ContentTableModule } from '../content-table/content-table.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    ButtonModule,
    ChipModule,
    ToastModule,
    AutoCompleteModule,
    ContentTableModule,
  ],
  providers: [MessageService, ContentService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searches: string[] = [];
  stateOptions = [
    { label: 'Market News', value: 'market-news' },
    { label: 'Symbol News', value: 'symbol-news' },
  ];
  value = 'market-news';
  activeIndex = 0;
  content_news!: Content[];
  content_market!: Content[];
  filteredSearches: string[] = [];
  selectedItem = '';
  suggestions: ISugestions[] |  any[];

  constructor(
    private contentService: ContentService,
    private messageService: MessageService
  ) {
    this.content_news = this.contentService.getContentNews();
    this.searches = this.contentService.getRecentSearch();
    this.content_market = this.contentService.getContentMarket();
    this.suggestions = [{ label: 'Recent Search', disabled: true }];
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
