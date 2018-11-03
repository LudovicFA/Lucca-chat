import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Array<any> = [];
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  addMessage(message: any) {
    this.messages.push(message);
    this.change.emit(true);
  }

  getMessage(){
    return this.messages;
  }
}
