import { Component, OnInit } from '@angular/core';

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
  redAmountRGB: any = { "background-color": `rgb(${this.red}, 0, 0)`};
  redPreview: any = {
    'background-image': `linear-gradient(to right, rgb(0,${this.green},${this.blue}), rgb(255, ${this.green}, ${this.blue}))`, 
    'width': '200px', 
    'height': '20px'
  };
  greenAmountRGB: any = { "background-color": `rgb(0, ${this.green}, 0)`};
  greenPreview: any = {
    'background-image': `linear-gradient(to right, rgb(${this.red},0,${this.blue}), rgb(${this.red}, 255, ${this.blue}))`, 
    'width': '200px', 
    'height': '20px'
  };
  blueAmountRGB: any = { "background-color": `rgb(0, 0, ${this.blue})`};
  bluePreview: any = {
    'background-image': `linear-gradient(to right, rgb(${this.red},${this.green},0), rgb(${this.red}, ${this.green}, 255))`, 
    'width': '200px', 
    'height': '20px'
  };
  finalPreview: any = {
    'background-color': `rgb(${this.red}, ${this.green}, ${this.blue})`, 
    'width': '200px', 
    'height': '200px'
  };

  constructor() { }

  ngOnInit(): void {
    this.updateColor();
  }

  updateColor() {
    this.redAmountRGB = { "background-color": `rgb(${this.red}, 0, 0)`};
    this.redPreview = {
      'background-image': `linear-gradient(to right, rgb(0,${this.green},${this.blue}), rgb(255, ${this.green}, ${this.blue}))`, 
      'width': '200px', 
      'height': '20px'
    };
    this.greenAmountRGB = { "background-color": `rgb(0, ${this.green}, 0)`};
    this.greenPreview = {
      'background-image': `linear-gradient(to right, rgb(${this.red},0,${this.blue}), rgb(${this.red}, 255, ${this.blue}))`, 
      'width': '200px', 
      'height': '20px'
    };
    this.blueAmountRGB = { "background-color": `rgb(0, 0, ${this.blue})`};
    this.bluePreview = {
      'background-image': `linear-gradient(to right, rgb(${this.red},${this.green},0), rgb(${this.red}, ${this.green}, 255))`, 
      'width': '200px', 
      'height': '20px'
    };
    this.finalPreview = {
      'background-color': `rgb(${this.red}, ${this.green}, ${this.blue})`, 
      'width': '200px', 
      'height': '200px'
    };
    this.color = "#" + this.getHex(this.red) + this.getHex(this.green) + this.getHex(this.blue);
    console.log(this.color);
  }

  getHex(value: number): string {
    let hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
}
