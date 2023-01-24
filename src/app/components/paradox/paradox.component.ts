import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paradox',
  templateUrl: './paradox.component.html',
  styleUrls: ['./paradox.component.css']
})
export class ParadoxComponent implements OnInit {

  isDoorClosed: boolean = true;
  openedDoorNo: number = 0;
  isDoorSelected: boolean = false;

  noOfDoors: number = 5;
  noOfRounds: number = 1000;
  isSwitch: boolean = true;

  doorNumbers: number[] = [];

  dimondDoorNo: number = 0;
  pickDoorNo: number = 0;

  winCount: number = 0;
  lossCount: number = 0;
  result: string = "";

  isShowPopup: boolean = false;
  
  ngOnInit() {
    this.doorCounter();
  }

  doorCounter() {
    for (let i=1; i<=this.noOfDoors; i++) {
      this.doorNumbers.push(i);
    }
  }

  pickDoor(doorNumber: number) {
    this.openedDoorNo = doorNumber;
    doorNumber != 0 ? this.isDoorSelected=true : this.isDoorSelected=false;
  }

  clickStart() {
    this.isShowPopup = true;
  }

  clickConfirm() {
    for (let nr=1; nr<this.noOfRounds; nr++) {
      // debugger
    this.dimondDoorNo = Math.ceil( Math.random() * this.noOfDoors );
    this.pickDoorNo = this.openedDoorNo ?? Math.ceil( Math.random() * this.noOfDoors );

    let unpickDoorNos = [];
    for (let i=1; i<=this.noOfDoors; i++) {
      if (i != this.pickDoorNo) {
        unpickDoorNos.push(i);
      }
    }

    let openDoorNos = [];
    let remainDoorNo;
    if (unpickDoorNos.includes(this.dimondDoorNo)) {
      openDoorNos = unpickDoorNos.filter(no => {
        return no != this.dimondDoorNo;
      })
      remainDoorNo = this.dimondDoorNo;
    }
    else {
      let randomPosition = Math.ceil( Math.random() * unpickDoorNos.length );
      remainDoorNo = unpickDoorNos[randomPosition];
    }

    if (this.isSwitch) {
      let tempNo: number;
      tempNo = this.pickDoorNo;
      this.pickDoorNo = remainDoorNo;
      remainDoorNo = tempNo;
    }
  
    if (this.pickDoorNo == this.dimondDoorNo) {
      this.result = 'Win';
      this.winCount++;
    }
    else {
      this.result = 'Lose';
      this.lossCount++;
    }
    // debugger
    console.log('Win count : ', this.winCount);
    console.log('Loss count : ', this.lossCount);
    console.log('Winn percentage : ', this.winCount * 100 / (this.winCount + this.lossCount) );
    }
  }

  getNotification(event: any) {
    // Do something with the notification (evt) sent by the child!
    console.log(event);
    this.isShowPopup = false;
    this.clickConfirm();
}
}
