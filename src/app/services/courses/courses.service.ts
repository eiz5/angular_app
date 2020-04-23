import { Injectable } from '@angular/core';
import { ICourse } from '../../types/i-course';

@Injectable({
	providedIn: 'root'
})
export class CoursesService {
	private courses: ICourse[] = [
		{
			id: 'id1',
			title: 'title1',
			creationDate: 'date1',
			duration: 'duration1',
			description: 'description1'
		},
		{
			id: 'id2',
			title: 'title2',
			creationDate: 'date2',
			duration: 'duration2',
			description: 'description2'
		}
	];
	constructor() {}

	public getCourses() {
		return this.courses;
	}
}
