import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitleDescPage } from './title-desc.page';

describe('TitleDescPage', () => {
  let component: TitleDescPage;
  let fixture: ComponentFixture<TitleDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleDescPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitleDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
