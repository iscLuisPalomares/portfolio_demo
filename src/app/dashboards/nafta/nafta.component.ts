import { keyframes } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-nafta',
  templateUrl: './nafta.component.html',
  styleUrls: ['./nafta.component.css']
})
export class NaftaComponent implements OnInit {
  p5: p5 = new p5(() => {});
  @ViewChild('sketch') sketch: ElementRef = new ElementRef({});
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.p5 = new p5(sketch, this.sketch.nativeElement);
  }

}

const sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(500, 500);
    initBackground();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  function initBackground() {
    p.background(240);
  }

  p.keyPressed = () => {
    console.log("key pressed: " + p.keyCode);
    if (p.keyCode == 82) { initBackground(); }
  }

  p.draw = () => {
    
    if (p.mouseIsPressed) {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  };
};