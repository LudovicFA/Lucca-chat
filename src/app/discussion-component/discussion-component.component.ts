import { Component, OnInit, Input } from '@angular/core';
import { MessageService} from './message.service';
import { Logs } from 'selenium-webdriver';
@Component({
  selector: 'app-discussion-component',
  templateUrl: './discussion-component.component.html',
  styleUrls: ['./discussion-component.component.css']
})
export class DiscussionComponentComponent implements OnInit {

  @Input() author: string;
 
  messages: any;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.change.subscribe(messages => {
      this.messages = this.messageService.getMessage();
    });
  }

}
