import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public executeSelectedChange = (event: any) => {
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
