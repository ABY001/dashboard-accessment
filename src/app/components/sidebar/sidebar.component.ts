import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'fa-home', class: '' },
  { path: '', title: 'Requests', icon: 'fa-comment', class: '' },
  { path: '', title: 'KYCs', icon: 'fa-file', class: '' },
  { path: '', title: 'Reports', icon: 'fa-sticky-note', class: '' },
  { path: '', title: 'Audit Trail', icon: 'fa-history', class: '' },
  { path: '', title: 'Users', icon: 'fa-users', class: '' },
  { path: '', title: 'Settings', icon: 'fa-cog', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
