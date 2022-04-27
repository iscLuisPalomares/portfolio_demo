import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {
  options: String[] = [
    'Novel',
    'Music',
    'Story',
    'Videogame',
    'Software',
    'Hardware',
    'Speaker',
    'Other'
  ];
  constructor() { }

  allCategories() {
    return this.options;
  }
}
