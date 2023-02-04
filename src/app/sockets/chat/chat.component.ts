import { Component, OnInit } from '@angular/core';
import { WebsocketioService } from '../../services/websocketio.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  service: WebsocketioService;
  message: string = "";
  constructor(service: WebsocketioService) { 
    this.service = service;
    service.getMessage().subscribe({
      next: (result) => {
        console.log(result);
        this.messages = result;
        // this.messages.push(result);
      }, error: (error) => {
        console.log(error);
        this.messages = [];
      }
    });
  }

  ngOnInit(): void {
    this.service.sendMessage("");
  }

  ngOnDestroy(): void {
    this.service.destroy();
  }


  sendMessage() {
    this.service.sendMessage(this.message);
    this.message = "";
  }

  
}


interface Message {
  Content: String
}