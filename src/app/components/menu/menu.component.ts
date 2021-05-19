import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routes = [
    {
      path:'home',
      name:'Home'
    },
    {
      path:'posts',
      name:'Posts'
    },
    {
      path:'about',
      name:'About'
    },
    {
      path:'contact',
      name:'Contact'
    },
  ];
  constructor() { }
  
  ngOnInit(): void {
  }

}
