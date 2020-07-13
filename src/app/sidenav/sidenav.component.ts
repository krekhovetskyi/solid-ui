import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'sol-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  private _mySidenavEl!: HTMLElement;

  constructor(@Inject(DOCUMENT) private _document: Document) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._mySidenavEl = this._document.getElementById('mySidenav') as HTMLElement;
  }

  closeNav(): void {
    this._mySidenavEl.style.width = '0px';
  }

  showNav(): void {
    this._mySidenavEl.style.width = '250px';
  }

}
