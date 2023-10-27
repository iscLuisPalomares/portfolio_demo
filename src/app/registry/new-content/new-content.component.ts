import { Component, OnInit } from '@angular/core';
import { ContentsService } from 'src/app/services/contents.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {
  options: String[] = [];
  newcontentgroup = this.formBuilder.group({
    title: "",
    description: "",
    contentType: "",
    isPrivate: false
  })
  
  constructor(private contentService: ContentsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.options = this.contentService.allCategories();
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.newcontentgroup.value);
  }
}
