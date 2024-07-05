import { Component, Inject } from '@angular/core';
import { ContentsService } from 'src/app/services/contents.service';

@Component({
  selector: 'app-dbsmanager',
  templateUrl: './dbsmanager.component.html',
  styleUrls: ['./dbsmanager.component.scss']
})
export class DbsmanagerComponent {
  public databases: string[] = [];
  collections: string[] = [];
  dbselected: string | undefined;
  baseUrl: string;
  content: ContentsService;
  
  constructor(content: ContentsService, @Inject('BACKEND_URL') baseUrl: string) {
    this.content = content;
    this.baseUrl = baseUrl;
    content.getListOfDatabases(baseUrl).subscribe((listOfDB) => {
      this.databases = listOfDB;
    });
  }

  showListOfCollections(dbname: string) {
    this.dbselected = dbname;
    this.content.getListOfCollections(this.baseUrl, this.dbselected).subscribe((listOfCollections) => {
      // this.collections = listOfCollections;
      this.collections = ['risk should be >50', 'connections should be < 100']
    });
  }
}
