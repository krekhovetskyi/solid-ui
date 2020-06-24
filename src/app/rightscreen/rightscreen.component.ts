import { AfterContentInit, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'sol-rightscreen',
  templateUrl: './rightscreen.component.html',
  styleUrls: ['./rightscreen.component.scss']
})
export class RightScreenComponent implements AfterContentInit {
  @Output() public notify: EventEmitter<string>;
  private _myRightScreen!: HTMLElement;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.notify = new EventEmitter<string>();
  }

  ngAfterContentInit(): void {
    this._myRightScreen = this._document.getElementById('myRightScreen') as HTMLElement;
  }

  closeClicked(): void {
    this.notify.emit('Click from nested component');
  }

  closeRightWindow(): void {
    this._myRightScreen.style.transform = 'translateX(100%)';
  }

  openRightWindow(): void {
    this._myRightScreen.style.transform = 'translateX(0%)';
  }

}
