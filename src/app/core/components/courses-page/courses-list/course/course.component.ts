import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../../../../types/i-course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
	@Input()
	public course: ICourse;

	constructor() {}

	ngOnInit(): void {}
}
