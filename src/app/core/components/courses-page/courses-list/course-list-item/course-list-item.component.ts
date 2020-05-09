import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../../../../types/i-course';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from '../../../../../services/courses/courses.service';

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

	constructor(private coursesService: CoursesService) {}

	ngOnInit(): void {
		this.testVariable = 'test';
	}

	handleDeleteCourse(): void {
		const isConfirmed = confirm('Вы действительно хотите удалить данный курс?');
		if (isConfirmed) {
			this.coursesService.removeCourse(this.course.id);
		}
	}

	handleEditCourse(): void {
		console.log(this.course.id, 'EditCourse');
	}
}
