import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-two',
  template: `<h3>c-two works!</h3>
  <p>template, styleUrls</p><br>`,
  styleUrls: ['./c-two.component.css']
})
export class CTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
