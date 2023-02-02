import { Component } from '@angular/core';
import { StoriesService } from '../../services/stories.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent {
  tasksList = [
    'add a service', 
    'add a pipe', 
    'generate a custom pipe', 
    'add login with jwt',
    'create a new directive',
    'dynamic css',
    'add formulary programmatically',
    'add radio buttons',
    'add check boxes',
    'add role-based links/pages',
    'pass values to child',
    'return values to parent',
    'add two way binding'
  ];
  storiesList: any = [];
  
  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.storiesList = this.storiesService.getStories();
  }
}
