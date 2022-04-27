import { Component, OnInit } from '@angular/core';
import { ContentsService } from 'src/app/services/contents.service';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {
  options: String[] = [];
  
  constructor(private contentService: ContentsService) { }

  ngOnInit(): void {
    this.options = this.contentService.allCategories();
  }
}
