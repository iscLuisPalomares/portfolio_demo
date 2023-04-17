import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  red: number = 0;
  green: number = 0;
  blue: number = 0;
  color: string = "#000000";
  storedColors: String[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  saveColor() {
    this.storedColors.push("#" + this.getHex(this.red) + this.getHex(this.green) + this.getHex(this.blue));
    console.log("Stored colors array");
    console.log(this.storedColors);
  }


  getHex(value: number): string {
    let hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
}
