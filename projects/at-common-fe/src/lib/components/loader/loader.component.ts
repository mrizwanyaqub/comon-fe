import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'at-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
