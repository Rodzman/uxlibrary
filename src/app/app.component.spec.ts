import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostUnitComponent } from './post-list/post-unit/post-unit.component';
import { FilterPipe } from './filter.pipe';
import { ReplacePipe } from './replace.pipe';
import { PostsService } from './posts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PostListComponent,
        FooterComponent,
        PostUnitComponent,
        FilterPipe,
        ReplacePipe
      ],
      imports: [ ReactiveFormsModule, HttpClientModule ],
      providers: [PostsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should return searchText from searchBox from header', () => {
    let searchText = 'test';
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.rescueSearch(searchText)
    expect(app.searchText).toBe(searchText);
  });
});
