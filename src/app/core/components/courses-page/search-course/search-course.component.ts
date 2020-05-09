import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from '../../../../services/courses/courses.service';

@Component({
	selector: 'app-search-course',
	templateUrl: './search-course.component.html',
	styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
	public faSearch = faSearch;
	private selectedCourse: string;

	constructor(private coursesService: CoursesService) {}

	ngOnInit(): void {}

	public setSelectedCourse(selectedCourse: string) {
		this.selectedCourse = selectedCourse;
	}

	public searchCourse(): void {
		this.coursesService.setSelectedCourse(this.selectedCourse);
	}
}
