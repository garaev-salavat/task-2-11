import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-four',
  template: `<h3>c-four works!</h3>
    <p>template, styles</p>
    <br />`,
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
export class CFourComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
