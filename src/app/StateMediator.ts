export enum StateType {
  MainPanelOnly,
  MainPanelWithSideNav,
  DetailPanel
}

export enum PanelType {
  Primary,
  Detail
}

export interface IState {
  getPanelType(): PanelType;

  getStateType(): StateType;

  isSideNavVisible(): boolean;

  getPanelButtonClass(): string;
}

export class MainPanelOnly implements IState {
  getPanelType(): PanelType {
    return PanelType.Primary;
  }

  getStateType(): StateType {
    return StateType.MainPanelOnly;
  }

  getPanelButtonClass(): string {
    return 'fa-chevron-right';
  }

  isSideNavVisible(): boolean {
    return false;
  }
}

export class MainPanelWithSideNav implements IState {
  getPanelType(): PanelType {
    return PanelType.Primary;
  }

  getStateType(): StateType {
    return StateType.MainPanelWithSideNav;
  }

  getPanelButtonClass(): string {
    return 'fa-chevron-left';
  }

  isSideNavVisible(): boolean {
    return true;
  }
}

export class DetailPanel implements IState {
  getPanelType(): PanelType {
    return PanelType.Detail;
  }

  getStateType(): StateType {
    return StateType.DetailPanel;
  }

  getPanelButtonClass(): string {
    return '';
  }

  isSideNavVisible(): boolean {
    return false;
  }
}


export interface IMediatorImpl {
  showNavPanel(): void;

  hideNavPanel(): void;

  showDetailPanel(): void;

  hideDetailPanel(): void;

  changeShowHideSideButton(fromClass: string, toClass: string): void;
}

export class Mediator {
  private _mainPanelState: MainPanelOnly;
  private _detailPanelState: DetailPanel;
  private _sideNavState: MainPanelWithSideNav;

  private _currentState: IState;
  private _currentMainPanelState: IState;
  private _mediatorImpl: IMediatorImpl;

  constructor(mediatorImpl: IMediatorImpl) {
    this._mainPanelState = new MainPanelOnly();
    this._detailPanelState = new DetailPanel();
    this._sideNavState = new MainPanelWithSideNav();
    this._mediatorImpl = mediatorImpl;
    this._currentState = this._currentMainPanelState = this._sideNavState;
  }

  getStateImpl(stateType: StateType): IState {

    switch (stateType) {
      case StateType.DetailPanel:
        return this._detailPanelState;
      case StateType.MainPanelOnly:
        return this._mainPanelState;
      case StateType.MainPanelWithSideNav:
        return this._sideNavState;
    }
  }

  showHideSideNavClicked(): void {
    switch (this._currentState.getStateType()) {
      case StateType.MainPanelWithSideNav:
        this.moveToState(StateType.MainPanelOnly);
        break;
      case StateType.MainPanelOnly:
        this.moveToState(StateType.MainPanelWithSideNav);
        break;
    }
  }

  moveToState(stateType: StateType): void {
    const previousState = this._currentState;
    const nextState = this.getStateImpl(stateType);

    if (previousState.getPanelType() === PanelType.Primary && nextState.getPanelType() === PanelType.Detail) {
      this._mediatorImpl.showDetailPanel();
    }

    if (previousState.getPanelType() === PanelType.Detail && nextState.getPanelType() === PanelType.Primary) {
      this._mediatorImpl.hideDetailPanel();
    }

    if (nextState.isSideNavVisible()) {
      this._mediatorImpl.showNavPanel();
    } else {
      this._mediatorImpl.hideNavPanel();
    }

    this._mediatorImpl.changeShowHideSideButton(
      previousState.getPanelButtonClass(),
      nextState.getPanelButtonClass()
    );

    this._currentState = nextState;

    if (this._currentState.getPanelType() === PanelType.Primary) {
      this._currentMainPanelState = this._currentState;
    }

  }

}
