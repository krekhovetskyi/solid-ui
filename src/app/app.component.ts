import { AfterContentInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'sol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  public title: string;
  private _mainEl!: HTMLElement;
  private _mySidenavEl!: HTMLElement;
  private _myRightScreen!: HTMLElement;
  private _isSideNavVisible: boolean;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.title = 'Select an option :';
    this._isSideNavVisible = true;
  }

  ngAfterContentInit(): void {
    this._mainEl = this._document.getElementById('main') as HTMLElement;
    this._mySidenavEl = this._document.getElementById('mySidenav') as HTMLElement;
    this._myRightScreen = this._document.getElementById('myRightScreen') as HTMLElement;
  }

  showHideSideClicked(): void {
    if (this._isSideNavVisible) {
      this._mainEl.style.marginLeft = '0px';
      this._mySidenavEl.style.width = '0px';
      this._isSideNavVisible = false;
    } else {
      this._mainEl.style.marginLeft = '250px';
      this._mySidenavEl.style.width = '250px';
      this._isSideNavVisible = true;
    }
  }

  buttonClickedDetail(): void {
    this._myRightScreen.style.transform = 'translateX(0%)';
    this._mainEl.style.transform = 'translate(-100%)';
  }

  closeClicked(): void {
    this._myRightScreen.style.transform = 'translateX(100%)';
    this._mainEl.style.transform = 'translate(0%)';
  }
}
