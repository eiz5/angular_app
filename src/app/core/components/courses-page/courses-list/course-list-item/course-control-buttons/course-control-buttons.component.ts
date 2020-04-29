import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-course-control-buttons',
	templateUrl: './course-control-buttons.component.html',
	styleUrls: ['./course-control-buttons.component.scss']
})
export class CourseControlButtonsComponent implements OnInit {
	@Output()
	deleteCourse: EventEmitter<any> = new EventEmitter();

	@Output()
	editCourse: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	onDeleteCourse() {
		this.deleteCourse.emit();
	}

	onEditCourse() {
		this.editCourse.emit();
	}
}
