import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RightScreenComponent } from './rightscreen/rightscreen.component';
import { IMediatorImpl, Mediator, StateType } from './StateMediator';


@Component({
  selector: 'sol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, IMediatorImpl {
  @ViewChild(SidenavComponent) private _sideNav!: SidenavComponent;
  @ViewChild(RightScreenComponent) private _rightScreen!: RightScreenComponent;
  public title: string;
  private _mainEl!: HTMLElement;
  private _myRightScreen!: HTMLElement;
  private _showHideSideBtnEl!: HTMLElement;
  private _isSideNavVisible: boolean;
  private _mediator: Mediator;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.title = 'Select an option :';
    this._isSideNavVisible = true;

    this._mediator = new Mediator(this);
  }

  ngAfterViewInit(): void {
    this._mainEl = this._document.getElementById('main') as HTMLElement;
    this._myRightScreen = this._document.getElementById('myRightScreen') as HTMLElement;
    this._showHideSideBtnEl = this._document.getElementById('show-hide-side-button') as HTMLElement;


    // @TODO: ViewChild and ContentChild details
    // https://jaxenter.com/simplifying-viewchild-contentchild-angular-142894.html
    this._mediator.moveToState(StateType.MainPanelWithSideNav);
  }

  showHideSideClicked(): void {
    this._mediator.showHideSideNavClicked();
  }

  buttonClickedDetail(): void {
    this._mediator.moveToState(StateType.DetailPanel);
  }

  onNotifyRightWindow(message: string) {
    this._mediator.moveToState(StateType.MainPanelWithSideNav)
  }

  showNavPanel(): void {
    this._sideNav.showNav();
    this._mainEl.style.marginLeft = '265px';
  }

  hideNavPanel(): void {
    this._sideNav.closeNav();
    this._mainEl.style.marginLeft = '0px';
  }

  showDetailPanel(): void {
    this._rightScreen.openRightWindow();
    this._mainEl.style.transform = 'translate(-100%)';
  }

  hideDetailPanel(): void {
    this._rightScreen.closeRightWindow();
    this._mainEl.style.transform = 'translate(0%)';
  }

  changeShowHideSideButton(fromClass: string, toClass: string): void {
    if (fromClass.length > 0 && toClass.length) {
      this._showHideSideBtnEl.classList.remove(fromClass)
      this._showHideSideBtnEl.classList.add(toClass)
    }
  }
}
