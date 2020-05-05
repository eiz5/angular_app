import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../../../../types/i-course';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-course',
	templateUrl: './course-list-item.component.html',
	styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
	@Input()
	public course: ICourse;
	public faClock = faClock;
	public faCalendarAlt = faCalendarAlt;
	public faStar = faStar;

	private testVariable: string;

	constructor() {}

	ngOnInit(): void {
		this.testVariable = 'test';
	}

	handleDeleteCourse(): void {
		console.log(this.course.id, 'DeleteCourse');
	}

	handleEditCourse(): void {
		console.log(this.course.id, 'EditCourse');
	}
}
