import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  _opened: boolean = true;


  _toggleOpened() {
  this._opened = !this._opened;
}
}
