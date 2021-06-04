import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent{
    @Input() message;
    @Output('closeEvent') closed = new EventEmitter();

    closePopup(){
        this.closed.emit();
    }
}