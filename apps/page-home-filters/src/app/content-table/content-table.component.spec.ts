import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ContentTableComponent } from './content-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ContentService } from '../services/content.service';

describe('ContentTableComponent', () => {
  let component: ContentTableComponent;
  let fixture: ComponentFixture<ContentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentTableComponent],
      providers: [ContentService],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideComponent(ContentTableComponent, {
        set: {
          styles: [''], 
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ContentTableComponent);
    component = fixture.componentInstance;
    component.content = [
      {
        title: 'test',
        url: '',
        author: 'full',
        created_at: '2024-01-22T10:00:00Z',
        tags: ['tag1', 'tag2'],
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
