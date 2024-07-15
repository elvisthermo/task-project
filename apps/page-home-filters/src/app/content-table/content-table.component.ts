import { Component, Input } from '@angular/core';
import { Content } from '../interfaces/news';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrl: './content-table.component.scss',
})
export class ContentTableComponent {
  @Input() content!: Content[];

}
