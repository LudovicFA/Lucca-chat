import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiscussionComponentComponent } from './discussion-component/discussion-component.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { MessageComponentComponent } from './message-component/message-component.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DiscussionComponentComponent,
    ChatComponentComponent,
    MessageComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
