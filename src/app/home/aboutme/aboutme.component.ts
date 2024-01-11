import { Component } from '@angular/core';
import { getBackEndUrl } from 'src/main';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
  backendUrl: string = "";
  constructor() {
    // document.location.href = 'https://3.80.80.145:8000/validate';
  }
  ngOnInit() {
    document.location.href = 'https://3.80.80.145:8000/validate';
    // this.backendUrl = getBackEndUrl();
  }
}
