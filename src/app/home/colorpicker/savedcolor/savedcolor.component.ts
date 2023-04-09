import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-savedcolor',
  templateUrl: './savedcolor.component.html',
  styleUrls: ['./savedcolor.component.scss']
})
export class SavedcolorComponent {
  @Input() savedcolor: String = "";
  colorSavedStyle: any = {};

  ngOnInit(): void {
    this.colorSavedStyle = {
      "background-color": this.savedcolor
    }
  }
}
