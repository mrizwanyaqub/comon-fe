import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import {IColor} from "../../models";

@Component({
  selector: 'at-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() color: IColor = null;
  @Input() showLabel: boolean = true;
  @Output() colorSelected = new EventEmitter();

  @ViewChild('colorDiv') colorDiv;

  private darkColors = ['red', 'blue', 'black', 'burgundy', 'grey', 'navy', 'black jack', 'dark navy', 'deep teal', 'gris', 'espresso', 'chestnut'];

  checkedStyle = {
    'font-size': '14px',
    color: 'black'
  };

  constructor() { }

  ngOnInit() {
    this.colorDiv.nativeElement.style.backgroundColor = this.color.code || this.color.color;
    this.checkedStyle.color = this.darkColors.indexOf(this.color.color) > -1 ? 'white' : 'black';
  }

  clicked(clickedColor) {
    this.color.selected = true;
    this.colorSelected.emit(clickedColor);
  }
}
