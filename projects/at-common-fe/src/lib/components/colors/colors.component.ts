import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IColor } from "../../models";
import { Colors } from "../../services";

@Component({
  selector: 'at-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  @Input() layout: string = 'column wrap';
  @Input() showLabel: boolean = true;
  @Input() defaultSelectFirstColor: boolean = true;
  @Output() colorSelected = new EventEmitter();

  colors: IColor[] = [];
  private selectedColor: string = null;

  constructor(private service: Colors) { }

  ngOnInit() {
    this.service.getColors().then(res => {
      if(res.data && res.data.length > 0) {
        const firstColor = res.data[0];
        firstColor.selected = this.defaultSelectFirstColor;
        this.colorSelected.emit(firstColor.color);
      }

      this.colors = res.data;
    }).catch(console.log);
  }

  handleColorSelected(sColor: string) {
    if(sColor === this.selectedColor)
      return;

    this.selectedColor = sColor;
    this.colors.forEach(color => { color.selected = color.color === sColor;});
    this.colorSelected.emit(sColor);
  }
}
