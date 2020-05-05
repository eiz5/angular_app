import { Injectable } from '@angular/core';
import { ICourse } from '../../types/i-course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CoursesService {
	private courses: ICourse[] = [
		{
			id: 'id1',
			title: 'Javascript',
			creationDate: new Date(2020, 2, 5),
			duration: 140,
			topRated: true,
			description: `Course descriptions are a driving force behind the enrollment decisions our students make. Please keep
this in mind when constructing each description, ensuring it is clear, concise, easy-to-read and conveys
the how each course will benefit the student.`
		},
		{
			id: 'id2',
			title: 'C++',
			creationDate: new Date(2020, 4, 1),
			duration: 50,
			topRated: false,
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
	private selectedCourseName = '';
	public sortedCourses = new BehaviorSubject<ICourse[]>(this.courses);

	constructor() {}

	public setSelectedCourse(courseName) {
		this.selectedCourseName = courseName;
		const newCoursesList = this.courses.filter(course =>
			course.title.toLowerCase().startsWith(this.selectedCourseName)
		);
		this.sortedCourses.next(newCoursesList);
	}
}
