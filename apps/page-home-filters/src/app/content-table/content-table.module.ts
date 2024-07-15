import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ContentTableComponent } from './content-table.component';

@NgModule({
  declarations: [ContentTableComponent],
  exports: [ContentTableComponent],
  imports: [CommonModule, TableModule]
})
export class ContentTableModule {
}
