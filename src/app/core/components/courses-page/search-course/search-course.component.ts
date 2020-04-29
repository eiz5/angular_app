import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search-course',
	templateUrl: './search-course.component.html',
	styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
	public selectedCourse: string;
	constructor() {}

	ngOnInit(): void {}

	searchCourse() {
		console.log(this.selectedCourse);
	}
}
