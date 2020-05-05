import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../../types/i-course';

@Pipe({
	name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
	transform(
		courses: ICourse[],
		name: 'title' | 'creationDate' | 'duration'
	): ICourse[] {
		switch (name) {
			case 'title': {
				return courses.sort((a: ICourse, b: ICourse) => {
					if (a.title < b.title) return -1;
					if (a.title > b.title) return 1;
				});
			}
			case 'creationDate': {
				return courses.sort(
					(a: ICourse, b: ICourse) =>
						// @ts-ignore
						a.creationDate - b.creationDate
				);
			}
			case 'duration': {
				return courses.sort(
					(a: ICourse, b: ICourse) => a.duration - b.duration
				);
			}
			default:
				return courses;
		}
	}
}
