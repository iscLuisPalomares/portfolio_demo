import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dbsmanager',
  templateUrl: './dbsmanager.component.html',
  styleUrls: ['./dbsmanager.component.scss']
})
export class DbsmanagerComponent {
  public databases: DatabaseRecord[] = [];
  
  constructor(http: HttpClient, @Inject('BACKEND_URL') baseUrl: string) {
    http.get<DatabaseRecord[]>(baseUrl + 'tomographies').subscribe({
      next: result => {
        this.databases = result;
      },
      error: error => console.error(error)
    });
  }
}

interface DatabaseRecord {
  dbname: string;
}