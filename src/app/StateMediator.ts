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
