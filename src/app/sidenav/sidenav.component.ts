import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'sol-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterContentInit {
  private _mySidenavEl!: HTMLElement;

  constructor(@Inject(DOCUMENT) private _document: Document) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this._mySidenavEl = this._document.getElementById('mySideNav') as HTMLElement;
  }

  closeNav(): void {
    this._mySidenavEl.style.width = '0px';
  }

  showNav(): void {
    this._mySidenavEl.style.width = '250px';
  }

}
