import { Component } from '@angular/core';

import { MessageService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    constructor(private messageService: MessageService) {}
    
    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }
}