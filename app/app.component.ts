import { Component, OnInit } from '@angular/core';

import { MessageService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    message: any;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        // subscribe to home component messages
        this.messageService.getMessage().subscribe(message => { this.message = message; });
    }
}