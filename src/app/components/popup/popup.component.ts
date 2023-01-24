import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  @Input() isShowPopup: boolean = false;

  ngOnInit(): void {
    console.log(this.isShowPopup)
  }

  sendNotification(value: string) {
    this.notifyParent.emit('Some value to send to the parent');
  }
}
