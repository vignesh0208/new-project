import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagePagePage } from './image-page.page';

describe('ImagePagePage', () => {
  let component: ImagePagePage;
  let fixture: ComponentFixture<ImagePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
