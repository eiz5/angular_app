import { Component, OnInit } from '@angular/core';
import { ICourse } from './i-course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public mockCourses: ICourse[];

  constructor() { }

  ngOnInit(): void {
    this.mockCourses = [{
      id: 'id1',
      title: 'title1',
      creationDate: 'date1',
      duration: 'duration1',
      description: 'description1',
    },
    {
      id: 'id2',
      title: 'title2',
      creationDate: 'date2',
      duration: 'duration2',
      description: 'description2',
    }];
  }

}
