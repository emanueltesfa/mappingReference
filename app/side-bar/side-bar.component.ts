import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {
  smallMenu = true;
  currentRoute!: string;

  constructor(public app: AppComponent) { }

  ngOnInit(): void {
  }

}
