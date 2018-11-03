import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DiscussionComponentComponent } from './discussion-component/discussion-component.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { MessageComponentComponent } from './message-component/message-component.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
        declarations: [
          AppComponent,
          DiscussionComponentComponent,
          ChatComponentComponent,
          MessageComponentComponent
        ],
        imports: [
          ReactiveFormsModule
        ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav > span').textContent).toContain('Chat application');
  });
});
