import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() red: number = 0;
  green: number = 0;
  blue: number = 0;
  color: string = "#000000";
  redAmountRGB: any = { "background-color": `rgb(${this.red}, 0, 0)`};
  redPreview: any = {
    'background-image': `linear-gradient(to right, rgb(0, ${this.green}, ${this.blue}), rgb(255, ${this.green}, ${this.blue}))`, 
    'width': '200px',
    'height': '20px'
  };
  greenAmountRGB: any = { "background-color": `rgb(0, ${this.green}, 0)`};
  greenPreview: any = {
    'background-image': `linear-gradient(to right, rgb(${this.red}, 0, ${this.blue}), rgb(${this.red}, 255, ${this.blue}))`, 
    'width': '200px', 
    'height': '20px'
  };
  blueAmountRGB: any = { "background-color": `rgb(0, 0, ${this.blue})`};
  bluePreview: any = {
    'background-image': `linear-gradient(to right, rgb(${this.red}, ${this.green}, 0), rgb(${this.red}, ${this.green}, 255))`, 
    'width': '200px', 
    'height': '20px'
  };
  finalPreview: any = {
    'background-color': `rgb(${this.red}, ${this.green}, ${this.blue})`, 
    'width': '200px', 
    'height': '200px'
  };
  storedColors: String[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updateColor();
  }

  saveColor() {
    this.storedColors.push("#" + this.getHex(this.red) + this.getHex(this.green) + this.getHex(this.blue));
    console.log(this.storedColors);
  }

  getPreviewStylesObject(red: number | null, green: number | null, blue: number | null) {    
    return {
      'background-image': `linear-gradient(to right, rgb(${red ?? 0},${green ?? 0},${blue ?? 0}), rgb(${red ?? 255}, ${green ?? 255}, ${blue ?? 255}))`, 
      'width': '200px', 
      'height': '20px'
    }
  }

  updateColor() {
    this.redAmountRGB = { "background-color": `rgb(${this.red}, 0, 0)`};
    this.redPreview = this.getPreviewStylesObject(null, this.green, this.blue);
    this.greenAmountRGB = { "background-color": `rgb(0, ${this.green}, 0)`};
    this.greenPreview = this.getPreviewStylesObject(this.red, null, this.blue);
    this.blueAmountRGB = { "background-color": `rgb(0, 0, ${this.blue})`};
    this.bluePreview = this.getPreviewStylesObject(this.red, this.green, null);
    this.finalPreview = {
      'background-color': `rgb(${this.red}, ${this.green}, ${this.blue})`, 
      'width': '200px', 
      'height': '200px'
    };
    this.color = "#" + this.getHex(this.red) + this.getHex(this.green) + this.getHex(this.blue);
  }

  getHex(value: number): string {
    let hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
}
