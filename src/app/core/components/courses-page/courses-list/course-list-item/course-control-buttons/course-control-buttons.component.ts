import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-course-control-buttons',
	templateUrl: './course-control-buttons.component.html',
	styleUrls: ['./course-control-buttons.component.scss']
})
export class CourseControlButtonsComponent implements OnInit {
	public faPen = faPen;
	public faTrash = faTrash;

	@Output()
	deleteCourse: EventEmitter<any> = new EventEmitter();

	@Output()
	editCourse: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	onDeleteCourse(): void {
		this.deleteCourse.emit();
	}

	onEditCourse(): void {
		this.editCourse.emit();
	}
}
