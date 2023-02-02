import { Component } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { getBackEndUrl } from 'src/main';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
  backendUrl: string = "";
  constructor(private storiesService: StoriesService) {
    this.backendUrl = getBackEndUrl();
  }

  ngOnInit(): void {
  }
}
