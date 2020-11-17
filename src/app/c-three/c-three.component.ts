import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-three',
  templateUrl: './c-three.component.html',
  styles: [
    `
      h3 {
        color: grey;
      }
      p {
        color: red;
      }
    `,
  ],
})
export class CThreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
