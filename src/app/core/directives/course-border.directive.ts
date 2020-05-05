import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
	@Input('appCourseBorder') public creationDate: Date;
	constructor(private element: ElementRef) {}

	ngOnInit(): void {
		this.setBorder();
	}

	private setBorder() {
		const currentDate = new Date();
		// @ts-ignore
		const days = (currentDate - this.creationDate) / 1000 / 60 / 60 / 24;

		if (days < 14 && this.creationDate < currentDate) {
			this.element.nativeElement.style.border = `1px solid var(--sick-green)`;
		}
	}
}
