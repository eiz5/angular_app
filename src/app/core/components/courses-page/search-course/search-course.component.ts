import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-search-course',
	templateUrl: './search-course.component.html',
	styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
	public selectedCourse: string;
	public faSearch = faSearch;

	constructor() {}

	ngOnInit(): void {}

	public searchCourse(): void {
		console.log(this.selectedCourse);
	}
}
