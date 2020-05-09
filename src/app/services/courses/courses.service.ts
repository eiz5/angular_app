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
	public displayedCourses = new BehaviorSubject<ICourse[]>(this.courses);

	constructor() {}

	public getList() {
		return this.courses;
	}

	public createCourse(course: ICourse) {
		this.courses.push(course);
		this.filterCourses();
	}

	public getItemById(id: string): ICourse {
		return this.courses.find(course => course.id === id);
	}

	public updateItem(newCourse: ICourse): void {
		const courseIndex = this.courses.findIndex(
			(course: ICourse) => course.id === newCourse.id
		);
		this.courses.splice(courseIndex, 1, newCourse);
		this.filterCourses();
	}

	public removeCourse(id: string): void {
		const courseIndex = this.courses.findIndex(
			(course: ICourse) => course.id === id
		);
		this.courses.splice(courseIndex, 1);
		this.filterCourses();
	}

	public setSelectedCourse(courseName): void {
		this.selectedCourseName = courseName;
		this.filterCourses();
	}

	private filterCourses() {
		let newCoursesList = this.courses;
		if (this.selectedCourseName) {
			newCoursesList = this.courses.filter(course =>
				course.title.toLowerCase().startsWith(this.selectedCourseName)
			);
		}
		this.displayedCourses.next(newCoursesList);
	}
}
