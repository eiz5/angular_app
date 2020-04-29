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
			description:
				'Explore the evolution of the spa industry from ancient civilizations to new frontiers of convergence\n' +
				'integrating spas, medicine, healthcare, tourism, and hospitality. Study the industry from an\n' +
				'international perspective, with emphasis on current business models and positioning for future trends. '
		},
		{
			id: 'id2',
			title: 'Video course',
			creationDate: '05.04.2020',
			duration: 50,
			description:
				'Explore the evolution of the spa industry from ancient civilizations to new frontiers of convergence\n' +
				'integrating spas, medicine, healthcare, tourism, and hospitality. Study the industry from an\n' +
				'international perspective, with emphasis on current business models and positioning for future trends. '
		}
	];
	constructor() {}

	public getCourses() {
		return this.courses;
	}
}
