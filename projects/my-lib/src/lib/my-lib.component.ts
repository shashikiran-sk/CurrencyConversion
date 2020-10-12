import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sklib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
