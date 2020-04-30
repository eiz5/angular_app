import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../../types/i-course';
import { CoursesService } from '../../../../services/courses/courses.service';

@Component({
	selector: 'app-courses-list',
	templateUrl: './courses-list.component.html',
	styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
	public courses: ICourse[];
	private coursesService;

	constructor(coursesService: CoursesService) {
		this.coursesService = coursesService;
	}

	ngOnInit(): void {
		this.courses = this.coursesService.getCourses();
	}

	public loadMoreCourses(): void {
		console.log('loadCourses');
	}
}
