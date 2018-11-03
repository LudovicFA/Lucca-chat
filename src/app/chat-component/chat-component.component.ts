import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {
  @Input() name: any;

  constructor() { }

  ngOnInit() {
  }

}
