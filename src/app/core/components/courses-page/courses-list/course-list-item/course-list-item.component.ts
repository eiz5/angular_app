import {
	Component,
	OnInit,
	Input,
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';
import { ICourse } from '../../../../../types/i-course';

@Component({
	selector: 'app-course',
	templateUrl: './course-list-item.component.html',
	styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent
	implements
		OnInit,
		OnChanges,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy {
	@Input()
	public course: ICourse;
	private testVariable: string;

	constructor() {}

	ngOnChanges(obj): void {
		console.log(obj, 'ngOneChanges');
	}

	ngOnInit(): void {
		this.testVariable = 'test';
		console.log('ngOnInit');
	}

	ngDoCheck() {
		console.log('ngDoCheck');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit');
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentInit');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit');
	}

	ngAfterViewChecked(): void {
		console.log('AfterViewChecked');
	}

	ngOnDestroy(): void {
		console.log('ngOnDestroy');
	}

	handleDeleteCourse() {
		console.log(this.course.id, 'DeleteCourse');
	}

	handleEditCourse() {
		console.log(this.course.id, 'EditCourse');
	}
}
