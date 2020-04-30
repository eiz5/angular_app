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
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

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
	public faClock = faClock;
	public faCalendarAlt = faCalendarAlt;
	private testVariable: string;

	constructor() {}

	ngOnChanges(obj): void {
		console.log(obj, 'ngOneChanges');
	}

	ngOnInit(): void {
		this.testVariable = 'test';
		console.log('ngOnInit');
	}

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}

	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	ngAfterContentChecked(): void {
		console.log('ngAfterContentInit');
	}

	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	ngAfterViewChecked(): void {
		console.log('AfterViewChecked');
	}

	ngOnDestroy(): void {
		console.log('ngOnDestroy');
	}

	handleDeleteCourse(): void {
		console.log(this.course.id, 'DeleteCourse');
	}

	handleEditCourse(): void {
		console.log(this.course.id, 'EditCourse');
	}
}
