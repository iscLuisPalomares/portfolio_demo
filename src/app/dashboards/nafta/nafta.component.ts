import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nafta',
  templateUrl: './nafta.component.html',
  styleUrls: ['./nafta.component.css']
})
export class NaftaComponent implements OnInit {
  items = [
    {name: "Apple", type: "fruit"},
    {name: "Carrot", type: "vegetable"},
    {name: "Orange", type: "fruit"}
  ];

  droppedItems = [];

  constructor() { }

  ngOnInit(): void { 
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    // this.droppedItems.push(e.dragData);
}  
}
