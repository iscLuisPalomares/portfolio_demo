import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = 'iscluispalomares';

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
