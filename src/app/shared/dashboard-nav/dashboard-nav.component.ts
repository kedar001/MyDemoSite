import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css'],
})
export class DashboardNavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    $.getScript('../../../assets/js/app.bundle.js');
  }
}
