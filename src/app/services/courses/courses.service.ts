import { Injectable } from '@angular/core';
import { ICourse } from '../../types/i-course';

@Injectable({
	providedIn: 'root'
})
export class CoursesService {
	private courses: ICourse[] = [
		{
			id: 'id1',
			title: 'Video course',
			creationDate: '04.04.2020',
			duration: 40,
			description: `Course descriptions are a driving force behind the enrollment decisions our students make. Please keep
this in mind when constructing each description, ensuring it is clear, concise, easy-to-read and conveys
the how each course will benefit the student.`
		},
		{
			id: 'id2',
			title: 'Video course',
			creationDate: '05.04.2020',
			duration: 50,
			description: `Course descriptions are a driving force behind the enrollment decisions our students make. Please keep
this in mind when constructing each description, ensuring it is clear, concise, easy-to-read and conveys
the how each course will benefit the student. Course descriptions are a driving force behind the enrollment decisions our students make. Please keep
this in mind when constructing each description, ensuring it is clear, concise, easy-to-read and conveys
the how each course will benefit the student. Course descriptions are a driving force behind the enrollment decisions our students make. Please keep
this in mind when constructing each description, ensuring it is clear, concise, easy-to-read and conveys
the how each course will benefit the student. Course descriptions are a driving force behind the enrollment decisions our students make. Please keep
this in mind when constructing each description, ensuring it is clear, concise, easy-to-read and conveys
the how each course will benefit the student.`
		}
	];
	constructor() {}

	public getCourses() {
		return this.courses;
	}
}
