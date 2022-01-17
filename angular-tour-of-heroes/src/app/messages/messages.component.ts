import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // Angular에서는 public으로 선언된 컴포넌트 프로퍼티만 바인딩할 수 있다.
  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }

}
