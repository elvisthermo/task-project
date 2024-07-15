import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ContentService } from '../services/content.service';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ContentTableModule } from '../content-table/content-table.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        SelectButtonModule,
        ButtonModule,
        ChipModule,
        ToastModule,
        AutoCompleteModule,
        ContentTableModule,
        NoopAnimationsModule,
        HomeComponent,
      ],
      providers: [{ provide: ContentService }, MessageService],
    })
      .overrideComponent(HomeComponent, {
        set: {
          styles: [''],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
